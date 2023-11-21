function _1(md){return(
md`# HW1 Strong baseline 參考D3畫廊，讀入虛構成績表，繪製嶄新風格成績表。`
)}

function _2(md){return(
md`描述: 將HW1~HW10分別創一個成績分布圖，用來簡化全部都放入同一張統計的複雜性，就可以對照自己的成績是位在什麼分布`
)}

function _data1(FileAttachment){return(
FileAttachment("data@2.json").json()
)}

function _4(md){return(
md`HW1的成績分布`
)}

function _5(Plot,data1){return(
Plot.plot({  

	y: {grid: true, label: "count"},  
	marks: [    
		Plot.rectY(data1, Plot.binX({y:"count"}, { x:"HW1", interval:1})),    
		Plot.gridY({ interval: 1, stroke: "pink", strokeOpacity: 0.5 })
	 ]
})
)}

function _6(md){return(
md`HW2的成績分布`
)}

function _7(Plot,data1){return(
Plot.plot({  

	y: {grid: true, label: "count"},  
	marks: [    
		Plot.rectY(data1, Plot.binX({y:"count"}, { x:"HW2", interval:1})),    
		Plot.gridY({ interval: 1, stroke: "yellow", strokeOpacity: 0.5 })
	 ]
})
)}

function _8(md){return(
md`HW3的成績分布`
)}

function _9(Plot,data1){return(
Plot.plot({  

	y: {grid: true, label: "count"},  
	marks: [    
		Plot.rectY(data1, Plot.binX({y:"count"}, { x:"HW3", interval:1})),    
		Plot.gridY({ interval: 1, stroke: "green", strokeOpacity: 0.5 })
	 ]
})
)}

function _10(md){return(
md`HW4的成績分布`
)}

function _11(Plot,data1){return(
Plot.plot({  

	y: {grid: true, label: "count"},  
	marks: [    
		Plot.rectY(data1, Plot.binX({y:"count"}, { x:"HW4", interval:1})),    
		Plot.gridY({ interval: 1, stroke: "blue", strokeOpacity: 0.5 })
	 ]
})
)}

function _12(md){return(
md`HW5的成績分布`
)}

function _13(Plot,data1){return(
Plot.plot({  

	y: {grid: true, label: "count"},  
	marks: [    
		Plot.rectY(data1, Plot.binX({y:"count"}, { x:"HW5", interval:1})),    
		Plot.gridY({ interval: 1, stroke: "purple", strokeOpacity: 0.5 })
	 ]
})
)}

function _14(md){return(
md`HW6的成績分布`
)}

function _15(Plot,data1){return(
Plot.plot({  

	y: {grid: true, label: "count"},  
	marks: [    
		Plot.rectY(data1, Plot.binX({y:"count"}, { x:"HW6", interval:1})),    
		Plot.gridY({ interval: 1, stroke: "orange", strokeOpacity: 0.5 })
	 ]
})
)}

function _16(md){return(
md`HW7的成績分布`
)}

function _17(Plot,data1){return(
Plot.plot({  

	y: {grid: true, label: "count"},  
	marks: [    
		Plot.rectY(data1, Plot.binX({y:"count"}, { x:"HW7", interval:1})),    
		Plot.gridY({ interval: 1, stroke: "white", strokeOpacity: 0.5 })
	 ]
})
)}

function _18(md){return(
md`HW8的成績分布`
)}

function _19(Plot,data1){return(
Plot.plot({  

	y: {grid: true, label: "count"},  
	marks: [    
		Plot.rectY(data1, Plot.binX({y:"count"}, { x:"HW8", interval:1})),    
		Plot.gridY({ interval: 1, stroke: "gray", strokeOpacity: 0.5 })
	 ]
})
)}

function _20(md){return(
md`HW9的成績分布`
)}

function _21(Plot,data1){return(
Plot.plot({  

	y: {grid: true, label: "count"},  
	marks: [    
		Plot.rectY(data1, Plot.binX({y:"count"}, { x:"HW9", interval:1})),    
		Plot.gridY({ interval: 1, stroke: "red", strokeOpacity: 0.5 })
	 ]
})
)}

function _22(md){return(
md`HW10的成績分布`
)}

function _23(Plot,data1){return(
Plot.plot({  

	y: {grid: true, label: "count"},  
	marks: [    
		Plot.rectY(data1, Plot.binX({y:"count"}, { x:"HW5", interval:1})),    
		Plot.gridY({ interval: 1, stroke: "blue", strokeOpacity: 0.5 })
	 ]
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["data@2.json", {url: new URL("../csv/data.json", import.meta.url), mimeType: "application/json", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("data1")).define("data1", ["FileAttachment"], _data1);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["Plot","data1"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["Plot","data1"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["Plot","data1"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer()).define(["Plot","data1"], _11);
  main.variable(observer()).define(["md"], _12);
  main.variable(observer()).define(["Plot","data1"], _13);
  main.variable(observer()).define(["md"], _14);
  main.variable(observer()).define(["Plot","data1"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer()).define(["Plot","data1"], _17);
  main.variable(observer()).define(["md"], _18);
  main.variable(observer()).define(["Plot","data1"], _19);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer()).define(["Plot","data1"], _21);
  main.variable(observer()).define(["md"], _22);
  main.variable(observer()).define(["Plot","data1"], _23);
  return main;
}
