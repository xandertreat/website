import { useLocation, useNavigate } from '@solidjs/router';
import {
	type Accessor,
	For,
	type JSX,
	createContext,
	createEffect,
	createSignal,
	onMount,
	useContext,
} from 'solid-js';
import Links from '../links';

interface TabContext {
	open: Accessor<boolean>;
}
const TabContext = createContext<TabContext>();

export function useTabContext() {
	const ctx = useContext(TabContext);
	if (!ctx)
		throw new Error('TabContext must be used within a <TabContext.Provider />');
	return ctx;
}

function Tab(props: {
	to: string;
	children?: JSX.Element;
}) {
	const { open } = useTabContext();

	return (
		<li role="presentation">
			<a
				aria-controls={props.to}
				aria-selected={open()}
				class="cursor-pointer bg-bottom bg-gradient-to-r bg-size-[0%_1px] bg-no-repeat pb-0.5 transition-all duration-200 hover:bg-size-[90%_1px]"
				classList={{
					'bg-size-[90%_1px] from-info to-info text-info': open(),
					'from-info/50 to-info/50 hover:text-info/50 active:from-info active:to-info active:hover:text-info':
						!open(),
				}}
				href={`#${props.to}`}
				role="tab"
				tabIndex={open() ? 0 : -1}
				target="_self"
			>
				<span class="inline-flex items-center justify-center gap-0.5 px-1 py-0.5 font-extralight">
					{props.children ?? <p class="text-pretty">{props.to}</p>}
				</span>
			</a>
		</li>
	);
}

export function TabContent(props: {
	id: string;
	children: JSX.Element;
}) {
	const { currentTab } = useTabsContext();
	const open = () => currentTab() === props.id;

	return (
		<TabContext.Provider value={{ open }}>
			<section
				class="mx-2 w-full items-center justify-center overflow-scroll px-2 lg:mt-3"
				classList={{
					'inline-flex': open(),
					hidden: !open(),
				}}
				id={props.id}
				role="tabpanel"
			>
				{props.children}
			</section>
		</TabContext.Provider>
	);
}

interface TabsContext {
	currentTab: Accessor<string>;
}
const TabsContext = createContext<TabsContext>();

function useTabsContext() {
	const ctx = useContext(TabsContext);
	if (!ctx)
		throw new Error('TabContext must be used within a <TabContext.Provider />');
	return ctx;
}

export default function Tabs(props: {
	tabs: string | string[];
	children: JSX.Element;
}) {
	const tabArray = Array.isArray(props.tabs) ? props.tabs : [props.tabs];
	const [currentTab, setCurrentTab] = createSignal(tabArray[0]);
	const navigate = useNavigate();

	onMount(() => navigate(`#${tabArray[0]}`, { replace: true }));

	createEffect(() => {
		const hash = useLocation().hash.slice(1);
		if (tabArray.includes(hash)) setCurrentTab(hash);
	});

	return (
		<TabsContext.Provider
			value={{
				currentTab,
			}}
		>
			<nav class="mr-5 ml-8 inline">
				<ul class="inline-flex gap-3" role="tablist">
					<For each={tabArray}>
						{(id) => (
							<TabContext.Provider value={{ open: () => currentTab() === id }}>
								<Tab to={id} />
							</TabContext.Provider>
						)}
					</For>
				</ul>
			</nav>
			<Links class="hidden lg:inline-flex" />
			{props.children}
		</TabsContext.Provider>
	);
}
