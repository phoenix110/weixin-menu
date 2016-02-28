

/**
 * 菜单排序
 */
$("#orderBt").click(function()
{
  $(".jslevel2").filter(".selected").length?(o=$(".jslevel2").filter(".selected").attr("id"),
  r=$(".jslevel2").filter(".selected").parents(".jslevel1").attr("id")):$(".jslevel1").filter(".selected").length?(o=null,
  r=$(".jslevel1").filter(".selected").attr("id")):(o=null,r=null),$(this).hide(),
  $("#finishBt").css(
  {
    display:"inline-block"
  }
  ),$("#menuList").addClass("sorting"),$("#pubBt,#viewBt").hide(),$(".js_addL2Btn").parent("li.js_addMenuBox").hide(),
  $(".js_addL1Btn").parent("li.js_addMenuBox").hide();
  var t=parseInt($("#menuList").children(".jslevel1").length),i=$("#menuList").children(".jslevel1");
  return i.removeClass("size1of1 size1of2 size1of3"),$("#menuList").children(".js_addMenuBox").removeClass("size1of1 size1of2 size1of3"),
  3>=t?(i.addClass("size1of"+t),$("#menuList").children(".js_addMenuBox").addClass("size1of"+t),
  $(".js_l2TitleBox:visible").find(".jslevel2").length||$(".js_l2TitleBox:visible").hide(),
$("#menuList").find("li.jslevel1>a").unbind("click").click(function()
{
  return $(".js_l2TitleBox").hide(),$(this).siblings(".js_l2TitleBox").find(".jslevel2").length&&$(this).siblings(".js_l2TitleBox").show(),
  !1;
}
),$("#menuList").find("li.jslevel2>a").unbind("click").click(function()
{
  return!1;
}
),e=Object.clone(v.data,!0),$("#menuList").sortable("enable"),$(".jsMenu").sortable("enable"),
b.ui.rankTips(1),f.refreshTips(),!1):void 0;
}





/**
 * 完成按钮按下事件
 */
$("#finishBt").click(function()
        {
          $(this).hide(),$("#orderBt").css(
          {
            display:"inline-block"
          }
          ),$(".js_l2TitleBox").hide(),$("#pubBt,#viewBt").show(),$(".js_addL2Btn").parent("li.js_addMenuBox").show(),
        $("#menuList").removeClass("sorting"),$("#menuList").find("li.jslevel1>a").unbind("click").click(function()
        {
          return!1;
        }
        ),$("#menuList").find("li.jslevel2>a").unbind("click").click(function()
        {
          return!1;
        }
        );
        var e=[];
        return $(".jslevel1").each(function(t,i)
        {
          var s=
          {
            id:i.id,
            subs:[]
          };
        $(i).find(".jslevel2").each(function(e,t)
        {
          s.subs.push(t.id);
        }
        ),e.push(s);
        }
        ),v.sort(e,function()
        {
        t(),s.suc("菜单排序成功"),$("#menuList").find("li.jslevel1>a").click(i),$("#menuList").find("li.jslevel2>a").click(a),
        o&&r?($("#"+r+">a").trigger("click"),$("#"+o+">a").trigger("click")):r&&$("#"+r+">a").trigger("click"),
        r=null,o=null;
        }
        ),$("#menuList").removeClass("sorting"),$("#menuList").sortable("disable"),f.refreshTips(),
        b.ui.rankTips(0),!1;
        }