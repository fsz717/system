
<template>
    <svg  :class="svgClass"  aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
// 需要注意检查package.json中svg-sprite-loader 的版本号，\
// 有可能下载的 4.X版本的svg-sprite-loader，现在只要重新下载指定版本下载npm i
// svg-sprite-loader@3.8.0 --save-dev，就能正确显示svg了
    export default {
        name: 'svgIcon',
        props: {
            iconClass: {
                type: String,
                required: true
            },
            className: {
                type: String
            }
        },
        computed: {
            iconName() {
                return `#icon-${this.iconClass}`
            },
            svgClass() {
                if (this.className) {
                    return 'svg-icon ' + this.className
                } else {
                    return 'svg-icon'
                }
            }
        }
    }
</script>

<style>
    .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
