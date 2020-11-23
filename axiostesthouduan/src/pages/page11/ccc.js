export default {
    functional: true,
    props: ["currentSon"],
    render(h,context) {
        return h(context.props.currentSon)
    }
}