import { A, useLocation } from "@solidjs/router";
import {
	type Accessor,
	type JSX,
	type Setter,
	createContext,
	createEffect,
	createMemo,
	createSignal,
	onMount,
	useContext,
} from "solid-js";
import { type SetStoreFunction, createStore } from "solid-js/store";

interface TabContainer {
	[id: string]: JSX.Element;
}

interface TabsContext {
	tabs: TabContainer;
	setTabs: SetStoreFunction<TabContainer>;
	currentTab: Accessor<string>;
	setCurrentTab: Setter<string>;
}
const TabsContext = createContext<TabsContext>();

function useTabsContext() {
	const ctx = useContext(TabsContext);
	if (!ctx)
		throw new Error("TabContext must be used within a <TabContext.Provider />");
	return ctx;
}

interface TabContext {
	open: Accessor<boolean>;
}
const TabContext = createContext<TabContext>();

export function useTabContext() {
	const ctx = useContext(TabContext);
	if (!ctx)
		throw new Error("TabContext must be used within a <TabContext.Provider />");
	return ctx;
}

export function Tab(props: {
	id: string;
	children?: JSX.Element;
}) {
	const { currentTab, setCurrentTab } = useTabsContext();
	const isCurrentTab = createMemo(() => props.id === currentTab());

	return (
		<TabContext.Provider value={{ open: () => currentTab() === props.id }}>
			<A
				class="cursor-pointer bg-bottom bg-gradient-to-r bg-size-[0%_1px] bg-no-repeat transition-all duration-200 hover:bg-size-[100%_1px] "
				classList={{
					"from-info/50 to-info/50 hover:text-info/50 active:from-info active:to-info active:hover:text-info":
						!isCurrentTab(),
					"bg-size-[100%_1px] from-info to-info text-info": isCurrentTab(),
				}}
				href={`#${props.id}`}
				onClick={() => setCurrentTab(props.id)}
				type="button"
			>
				<span class="inline-flex items-center justify-center gap-0.5 px-1 py-0.5 font-extralight">
					{props.children}
					<p>{props.id}</p>
				</span>
			</A>
		</TabContext.Provider>
	);
}

function Content(props: {
	for: string;
	children?: JSX.Element;
}) {
	const { setTabs, currentTab } = useTabsContext();

	onMount(() =>
		setTabs(props.for, () => (
			<TabContext.Provider value={{ open: () => currentTab() === props.for }}>
				{props.children}
			</TabContext.Provider>
		)),
	);

	return <></>;
}

function Tabs(props: { children: JSX.Element }) {
	const [tabs, setTabs] = createStore<TabContainer>();
	const [currentTab, setCurrentTab] = createSignal("");
	const currentTabContent = createMemo(() => tabs?.[currentTab()]);

	// init
	createEffect(() => {
		if (!currentTab()) {
			const k = Object.keys(tabs).at(0);
			if (k) setCurrentTab(k);
		}
	});

	// sync with URL
	createEffect(() => {
		const hash = useLocation().hash;
		const possibleTab = hash.slice(hash.indexOf("#") + 1);
		if (Object.keys(tabs).includes(possibleTab)) setCurrentTab(possibleTab);
	});

	return (
		<TabsContext.Provider
			value={{
				tabs,
				setTabs,
				currentTab,
				setCurrentTab,
			}}
		>
			<nav class="mx-6 inline-flex gap-3">{props.children}</nav>
			<div class="fhd:w-[33vw] hd:w-[44vw] w-[66vw] lg:mt-3">
				{currentTabContent()}
			</div>
		</TabsContext.Provider>
	);
}

export default Object.assign(Tabs, {
	Tab,
	Content,
});
