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

interface TabContent {
	[id: string]: JSX.Element;
}
interface TabContextProps {
	tabs: TabContent;
	setTabs: SetStoreFunction<TabContent>;
	currentTab: Accessor<string>;
	setCurrentTab: Setter<string>;
}
const TabContext = createContext<TabContextProps>();

function useTabContext() {
	const ctx = useContext(TabContext);
	if (!ctx)
		throw new Error("TabContext must be used within a <TabContext.Provider />");
	return ctx;
}

export function Tab(props: {
	id: string;
	children?: JSX.Element;
}) {
	const { currentTab, setCurrentTab } = useTabContext();
	const isCurrentTab = createMemo(() => props.id === currentTab());

	return (
		<button
			class="cursor-pointer bg-bottom bg-gradient-to-r bg-size-[0%_1px] bg-no-repeat transition-all duration-200 hover:bg-size-[100%_1px] "
			classList={{
				"from-info/50 to-info/50 hover:text-info/50 active:from-info active:to-info active:hover:text-info":
					!isCurrentTab(),
				"bg-size-[100%_1px] from-info to-info text-info": isCurrentTab(),
			}}
			onClick={() => setCurrentTab(props.id)}
			type="button"
		>
			<span class="inline-flex items-center justify-center gap-0.5 px-1 py-0.5 font-extralight">
				{props.children}
				<p>{props.id}</p>
			</span>
		</button>
	);
}

function Content(props: {
	for: string;
	children?: JSX.Element;
}) {
	const { setTabs } = useTabContext();
	onMount(() => setTabs(props.for, props.children));

	return <></>;
}

function Tabs(props: { children: JSX.Element }) {
	const [tabs, setTabs] = createStore<TabContent>();
	const [currentTab, setCurrentTab] = createSignal("");
	const currentTabContent = createMemo(() => tabs?.[currentTab()]);

	createEffect(() => {
		const k = Object.keys(tabs).at(0);
		if (!currentTab() && k) setCurrentTab(k);
	});

	return (
		<TabContext.Provider
			value={{
				tabs,
				setTabs,
				currentTab,
				setCurrentTab,
			}}
		>
			<span class="inline-flex gap-3">{props.children}</span>
			<div class="h-12">{currentTabContent()}</div>
		</TabContext.Provider>
	);
}

export default Object.assign(Tabs, {
	Tab,
	Content,
});
