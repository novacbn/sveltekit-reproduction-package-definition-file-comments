import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        message: string;
        other: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ComponentWithPropsProps = typeof __propDef.props;
export declare type ComponentWithPropsEvents = typeof __propDef.events;
export declare type ComponentWithPropsSlots = typeof __propDef.slots;
export default class ComponentWithProps extends SvelteComponentTyped<ComponentWithPropsProps, ComponentWithPropsEvents, ComponentWithPropsSlots> {
}
export {};
