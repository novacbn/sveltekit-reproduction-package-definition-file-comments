<script lang="ts">
    import type {IMixinProperties} from "./mixins";

    type $$Props = {
        /**
         * This is a description in the `$$Props` interface!
         *
         * @deprecated I am deprecated!
         */
        message: string;
    } & IMixinProperties;

    /**
    * This is a description of an exported property!
    *
    * @deprecated I am deprecated!
    */
    export let message: $$Props["message"] = "world";
</script>

Hello, {message}!

<!-- NOTE: means nothing, just needed something to reference `$$props` with -->
<code>{$$props}</code>
