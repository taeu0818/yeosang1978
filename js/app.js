//csrf token 을 위한 ajax 기본 세팅
$.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
//Promise 형태의 ajax 요청
const request = v => $.ajax(v).catch(res => console.log(res));
const zoom = () => $('body').css('zoom' , `${document.documentElement.clientWidth / (1920 - (hasScrollBar() ? 17 : 0))}`);
const hasScrollBar = (target = $('html')) => (target.prop("scrollHeight") == 0 && target.prop("clientHeight") == 0) || (target.prop("scrollHeight") > target.prop("clientHeight"));

// $(window).on('resize' , zoom);
// $(() => zoom());
