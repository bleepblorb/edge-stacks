let out = "";
let $lineNumber = 1;
let $filename = "{{__dirname}}index.edge";
try {
out += state.$stacks.create('js');
out += "\n";
$lineNumber = 2;
out += state.$stacks.create('css');
} catch (error) {
template.reThrow(error, $filename, $lineNumber);
}
return out;