import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
         * This is a description in the `$$Props` interface!
         *
         * @deprecated I am deprecated!
         */
        message: string;
        other: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ComponentWithoutPropsProps = typeof __propDef.props;
export declare type ComponentWithoutPropsEvents = typeof __propDef.events;
export declare type ComponentWithoutPropsSlots = typeof __propDef.slots;
export default class ComponentWithoutProps extends SvelteComponentTyped<ComponentWithoutPropsProps, ComponentWithoutPropsEvents, ComponentWithoutPropsSlots> {
}
export {};
