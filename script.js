var itemurl="https://awiclass.monoame.com/api/command.php?type=get&name=itemdata";
var shoplist={};
// shoplist.name="My buyList購物清單";
// shoplist.time="2025/1/29";
shoplist.list=[
  {name: "吹風機",price: 300},
  {name: "麥克風",price: 1500},
  {name: "筆記型電腦",price: 32000},
  {name: "Iphone 16",price: 40000},
  {name: "電視",price: 30000}
];
// ajax載入網頁
// $.ajax({
//   url: itemurl,
//   success: function(res){
//     // console.log(JSON.parse(res));
//     shoplist.list=JSON.parse(res);
//     showlist();
//   }
// });

var item_html="<li id={{id}} class='buy_item'>{{num}}.{{name}}<div class='price'>{{price}}</div><div id={{del_id}} data-del-id={{delid}} class='del_btn' >X</div></li>";

var total_html=" <li class='buy_item total'>總價<div class='price'>{{price}}</div></li>";

// function showlist(){
//   $("#item_list").html("");
//   var total_price=0;
// for(var i=0;i<shoplist.list.length;i++){
//   var item=shoplist.list[i];
//   var item_id="buyliem_"+i;
//   var del_item_id="del_buyliem_"+i;
//   total_price+=parseInt(item.price);  
//   //   replace 取代
//   var current_time_html=
//       item_html.replace("{{num}}",i+1)
//                .replace("{{name}}",item.name)
//                .replace("{{id}}",item_id)
//                .replace("{{del_id}}",del_item_id)
//                .replace("{{price}}",item.price)
//                .replace("{{delid}}",i)
// //   append 新增
// console.log(total_price);
// $("#item_list").append(current_time_html);
//   // delbtn id buyitem 1
// $("#"+del_item_id).click(
//    function(){
//       remove_item($(this).attr("del-del-id"));
//     }
//   );
// }
//   var current_total_html=
//       total_html.replace("{{price}}",total_price)
//   $("#item_list").append(current_total_html);
// }
// showlist();
// $(".addbtn").click(
//   function(){
//     shoplist.list.push(
//       {
//         name:$("#input_name").val(),
//         price:$("#input_price").val()
//       }
//     );
//     $("#input_name").val("");
//     $("#input_price").val("");
//     showlist();
//   }
// );

// function remove_item(id){
//   shoplist.list.splice(id,1);
//   showlist();
// }

// 練習
// 一、取代樣式
function showlist (){
  $("#item_list").html("");
  var total_price = 0; // 1.定義總價數量
  for (var i=0; i<shoplist.list.length;i++){
  var item = shoplist.list[i];
  var item_id = "buyitem_"+i;
  var del_item_id = "del_buyitem"+i;
  // 2.設定串列給定變數
  total_price+=parseInt(item.price);
  // 3.設定item裡面的價計算為總價。
  var current_item_html = 
      item_html.replace("{{num}}",i+1)
               .replace("{{name}}",item.name)
               .replace("{{price}}",item.price)
               .replace("{{id}}",item_id)
               .replace("{{del_id}}",del_item_id)
  $("#item_list").append(current_item_html);
    // 4.設定current_item_html的html裡面的排版取代串列。
    // 5.並更新current_item_html的排版樣式，把更新後的項目顯示出來
  //  刪除按鈕 id 
  $("#"+del_item_id).click(
      function(){
        remove_item(del_item_id);
      }
    );
  } 
  var current_total_html = 
        total_html.replace("{{price}}",total_price);
  $("#item_list").append(current_total_html);
}
showlist(); 

// 二、點擊事件
$(".addbtn").click(
  function(){
    shoplist.list.push(  
      {
        name:$("#input_name").val(), // 新增輸入欄姓名進去使用push加上後面
        price:$("#input_price").val() // 新增輸入欄價錢進去使用push加上後面
      }
    ); 
    $("#input_name").val(""), // 輸入完後取消輸入的字串
    $("#input_price").val("")
    showlist();  //呼叫函數
  }
);

// 3. 刪除動做
function remove_item(id){
    shoplist.list.splice(id,1);
    showlist();
};