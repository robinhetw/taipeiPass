// 開合欄位
(function ($) {
  //$(".accordion > li:eq(0) a").addClass("active").next().slideDown();

  $(".accordion .block__accordion__li").click(function (j) {
    var dropDown = $(this).closest("li").find(".block__accordion__info");

    $(this)
      .closest(".accordion")
      .find(".block__accordion__info")
      .not(dropDown)
      .slideUp();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this)
        .closest(".accordion")
        .find(".block__accordion__li.active")
        .removeClass("active");
      $(this).addClass("active");
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
  });
})(jQuery);

// 搜尋欄位的清空內容按紐

$("#js--clearBtn").click(function () {
  $(".searchTerm").val(" ");
  $(".cross").removeClass("active");
});

$(document).ready(function () {
  $(".searchTerm").focus(function () {
    $(".cross").addClass("active");
  });
  $(".searchTerm").blur(function (e) {
    if (!e.relatedTarget) {
      $(".cross").removeClass("active");
    }
  });
});

// 首頁開合
$(document).ready(function () {
  $(".js--openList").click(function () {
    $(".result__all").toggleClass("active");
    $(".btn__map").toggleClass("active");
    $(".result__all").removeClass("map__pin--active");
    $(".map__pin").removeClass("active");
    $(".map__background").removeClass("active");

    if ($(".result__all").hasClass("active")) {
      $(".js--openListContent").text("關閉列表");
    } else {
      $(".js--openListContent").text("展開列表");
    }
  });
});

// 字數限制
$(function () {
  $(".page__title").each(function () {
    var maxwidth = 10; //設置最多顯示的字數
    var text = $(this).text();
    if ($(this).text().length > maxwidth) {
      $(this).text($(this).text().substring(0, maxwidth));
      $(this).html($(this).html() + "...");
      //$(this).html($(this).html() + "..." + "<a href='###'> 點擊展開</a>");
    }
    // $(this)
    //   .find("a")
    //   .click(function () {
    //     $(this).parent().text(text);
    //   });
  });
});

//js-OpenCouponInfo
// Open Coupon Info
$(document).ready(function () {
  $(".js-OpenCouponInfo").click(function () {
    $(this).siblings(".coupon__block__info").toggleClass("active");
    $(this).find("img").toggleClass("active");
  });
});
// 首頁地圖 pin
$(document).ready(function () {
  $(".js--LocationPin").click(function () {
    $(".result__all").toggleClass("map__pin--active");
    $(".map__pin").toggleClass("active");
    $(".map__background").toggleClass("active");
  });

  $(".map__background").click(function () {
    $(".map__pin").removeClass("active");
    $(".result__all").removeClass("map__pin--active");
    $(".map__background").removeClass("active");
  });
});

// 訊息 modal
$(document).ready(function () {
  $(".js--modalOpen").click(function () {
    $(".modal").css("display", "block");
    $(".modal__background").css("display", "block");
  });

  $(".js--modalClose").click(function () {
    $(".modal").css("display", "none");
    $(".modal__background").css("display", "none");
  });

  $(".modal__background").click(function () {
    $(".modal").css("display", "none");
    $(".modal__background").css("display", "none");
  });
});

// 篩選
$(document).ready(function () {
  $("#myInput").change(function () {
    const value = $(this).val().toLowerCase();
    const filterResult = $(".result");
    const filterResultNone = $(".result__none");
    const display = $(".result").css("display");

    $(filterResult).filter(function (i, e) {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      if (e.dataset.location.includes(value)) {
        $(filterResultNone).css("display", "none");
      } else if (
        display == "flex" &&
        e.dataset.location.includes(value) == false
      ) {
        $(filterResultNone).css("display", "none");
      } else {
        $(filterResultNone).css("display", "block");
      }
    });
  });
});
// custom select from w3c
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
        and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
