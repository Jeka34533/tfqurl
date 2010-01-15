function changeTFQUrl() {
	var input = $('#jqtfqurl_input').val();
	var type = $('#jqtfqurl_type').val();
	var output = (function(input, type){
		switch (type) {
			case "t_c": return $.decodeThunder(input);  break;
			case "f_c": return $.decodeFlashget(input); break;
			case "q_c": return $.decodeQQDL(input);     break;
			case "c_t": return $.encodeThunder(input);  break;
			case "c_f": return $.encodeFlashget(input); break;
			case "c_q": return $.encodeQQDL(input);     break;
			default: return ""; break;
		};
	})(input, type);
	$('#jqtfqurl_output').val(output);
};
var jqtfqurl_html = 
'<textarea id="jqtfqurl_input" name="jqtfqurl_input" rows="5" style="word-wrap:break-word;word-break:break-all;"></textarea><br />' +
'<select id="jqtfqurl_type" name="jqtfqurl_type"> \n' +
'<option value="t_c">迅雷->普通</option>' +
'<option value="f_c">快车->普通</option>' +
'<option value="q_c">旋风->普通</option>' +
'<option value="c_t">普通->迅雷</option>' +
'<option value="c_f">普通->快车</option>' +
'<option value="c_q">普通->旋风</option>' +
'</select>' +
'<button id="jqtfqurl_submit" name="jqtfqurl_submit" onclick="changeTFQUrl();">转换</button><br />' +
'<textarea id="jqtfqurl_output" name="jqtfqurl_output" rows="5" style="word-wrap:break-word;word-break:break-all;"></textarea>';
document.write(jqtfqurl_html);