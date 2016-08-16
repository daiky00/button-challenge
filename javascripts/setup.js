function setToggleLabel(toggle, target) {
  if (target.prop('disabled')) {
    toggle.html('enable');
  } else {
    toggle.html('disable');
  }
}

function readyFn() {
  var $toggleBtn = $("#test-button");
  var $targetBtn = $("#new-button");
  setToggleLabel($toggleBtn, $targetBtn);

  $toggleBtn.on('click', function() {
    $(this).toggleClass('btn--blue');
    $targetBtn.prop('disabled', function(_, value) {
      $(this).toggleClass('btn--green bounce');
      return ! value });
    setToggleLabel($toggleBtn, $targetBtn);
  });
}

$(readyFn);
