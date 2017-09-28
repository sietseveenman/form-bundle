$(function(){
  $('.js-countable').each(function(index, item){
      item = $(item);
      let count_area =  item.find('textarea');
      let counter_attr = count_area.attr('data-length');
      let total = counter_attr - count_area.val().length;

      let count_text =  item.find('.js-countable-total');
      count_text.text(total);
      if(isNaN(total) || total <= 0) {
        count_text.addClass('c-counter-error');
      }else {
        count_text.removeClass('c-counter-error');
      }
      count_area.on('keyup', function(){
            let total = counter_attr - count_area.val().length;
            count_text.text(total);
            if(isNaN(total) || total <= 0) {
              count_text.addClass('c-counter-error');
            }else {
              count_text.removeClass('c-counter-error');
            }
      })
  });
});