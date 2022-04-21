import { render } from "node-json2html"

test('it will not work', () => {
    render([{'s':'json2html'},{'s':'is'},{'s':'awesome'}],{'<>':'li','text':'${s}'})
})