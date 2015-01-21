
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3544,function(sym,e){sym.stop();sym.getSymbol("Symbol_1").stop();sym.getSymbol("BACK").stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4690,function(sym,e){sym.stop();sym.getSymbol("Symbol_1").stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5607,function(sym,e){sym.stop();sym.getSymbol("Symbol_1").stop();sym.getSymbol("BACK").stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text5Copy4}","click",function(sym,e){sym.play("stage_2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text5Copy2}","click",function(sym,e){sym.play("stage_4");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text5Copy16}","click",function(sym,e){sym.play("stage_2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text5Copy17}","click",function(sym,e){sym.play("stage_2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text5Copy18}","click",function(sym,e){sym.play("stage_4");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6544,function(sym,e){sym.stop();sym.getSymbol("Symbol_1").stop();sym.getSymbol("BACK").stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_NEXT}","click",function(sym,e){sym.play();sym.getSymbol("Symbol_1").play();sym.getSymbol("BACK").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BACK}","click",function(sym,e){sym.playReverse();sym.getSymbol("Symbol_1").playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1794,function(sym,e){sym.stop();sym.getSymbol("Symbol_1").stop();sym.getSymbol("BACK").stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_REPLAY}","click",function(sym,e){sym.play();sym.getSymbol("Symbol_1").play();sym.getSymbol("dot").play();sym.getSymbol("BACK").play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'dot'
(function(symbolName){})("dot");
//Edge symbol end:'dot'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'list'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text5Copy12}","click",function(sym,e){sym.play("stage_4");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text5Copy11}","click",function(sym,e){sym.play("stage_2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text5Copy15}","click",function(sym,e){sym.play("stage_2");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7742,function(sym,e){sym.stop();});
//Edge binding end
})("list");
//Edge symbol end:'list'

//=========================================================

//Edge symbol: 'NEXT'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Caret-white}","click",function(sym,e){});
//Edge binding end
})("NEXT");
//Edge symbol end:'NEXT'

//=========================================================

//Edge symbol: 'BACK'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Caret-whiteCopy}","click",function(sym,e){});
//Edge binding end
})("BACK");
//Edge symbol end:'BACK'

//=========================================================

//Edge symbol: 'REPLAY'
(function(symbolName){})("REPLAY");
//Edge symbol end:'REPLAY'
})(jQuery,AdobeEdge,"EDGE-1641954158");