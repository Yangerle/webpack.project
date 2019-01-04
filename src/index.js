// import printMe from './print.js';
import './styles.css';
// import _ from 'lodash';


import { file, parse } from './globals.js';
console.log(file)
console.log(parse)

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');

	// alert('Hmmm, this probably isn\'t a great idea...')
	// element.innerHTML =_.join(['Another', 'module', 'loaded!'], ' ')
	element.innerHTML =join(['Another', 'module', 'loaded!'], ' ')

	btn.innerHTML = 'Click me and check the console!';
	// btn.onclick = printMe;


	// Note that because a network request is involved, some indication
// of loading would need to be shown in a production-level site/app.
	btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
		var print = module.default;
		print();
	});
	element.appendChild(btn);

	return element;
}
let element = component();
document.body.appendChild(element);
if(module.hot){
	module.hot.accept('./print.js',function () {
		console.log('Accepting the updated printMe module!')
		document.body.removeChild(element);
		element = component();
		document.body.appendChild(element);
		// printMe();
		// 按钮的 onclick 事件仍然绑定在旧的 printMe 函数上。为了让它与 HRM 正常工作，我们需要使用 module.hot.accept 更新绑定到新的 printMe 函数上：
	})
}
//借助于 style-loader 的帮助，CSS 的模块热替换实际上是相当简单的。当更新 CSS 依赖模块时，此 loader 在后台使用 module.hot.accept 来修补(patch) <style> 标签。
