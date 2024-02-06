let out = "";
let $lineNumber = 1;
let $filename = "{{__dirname}}index.edge";
try {
out += await template.compileComponent('script')(template, template.getComponentState({}, { $context: Object.assign({}, $context), main: function () { return "" } }, { filename: $filename, line: $lineNumber, col: 0 }), $context);
out += "\n";
$lineNumber = 2;
out += state.$stacks.create('js');
} catch (error) {
template.reThrow(error, $filename, $lineNumber);
}
return out;