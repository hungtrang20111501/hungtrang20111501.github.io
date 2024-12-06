let biicore = {
  templatePremium: true,
  isPremium: true,
  bgMusic: 'assets/audio/BeautifulInWhite-ShaneFilan.mp3',
  alert: '[]',
  effect: { type: 'heart' },
  isAutoPlay: false,
};

var photoGalleries = [
  {
    src: 'assets/images/wedding/HUG04552.JPG',
    thumb: 'assets/images/wedding/HUG04552.JPG',
    subHtml: `<div class="lg-sub-html"><h4>Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn</h4></div>`,
  },
  {
    src: 'assets/images/wedding/HUG04424.jpg',
    thumb: 'assets/images/wedding/HUG04424.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả một cảm giác - đó là sự quan tâm, chia sẻ, giúp đỡ, hy sinh</h4></div>`,
  },
  {
    src: 'assets/images/wedding/HUG05235.JPG',
    thumb: 'assets/images/wedding/HUG05235.JPG',
    subHtml: `<div class="lg-sub-html"><h4>Vì vậy, để được ai đó nhìn thấy đầy đủ và được yêu mến dù thế nào đi nữa — đây là một sự dâng hiến của con người có thể là điều kỳ diệu</h4></div>`,
  },
  {
    src: 'assets/images/wedding/HUG04905.JPG',
    thumb: 'assets/images/wedding/HUG04905.JPG',
    subHtml: `<div class="lg-sub-html"><h4>Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá</h4></div>`,
  },
  {
    src: 'assets/images/wedding/HUG04590.JPG',
    thumb: 'assets/images/wedding/HUG04590.JPG',
    subHtml: `<div class="lg-sub-html"><h4>Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy vọng</h4></div>`,
  },
  {
    src: 'assets/images/wedding/HUG04722.JPG',
    thumb: 'assets/images/wedding/HUG04722.JPG',
    subHtml: `<div class="lg-sub-html"><h4>Tôi yêu bạn vì tất cả những gì bạn đang có, tất cả những gì bạn đã có, và tất cả những gì bạn chưa hiện hữu</h4></div>`,
  },
  {
    src: 'assets/images/wedding/HUG05187.JPG',
    thumb: 'assets/images/wedding/HUG05187.JPG',
    subHtml: `<div class="lg-sub-html"><h4>Tôi có thể chinh phục thế giới bằng một tay miễn là bạn đang nắm tay kia</h4></div>`,
  },
  {
    src: 'assets/images/wedding/HUG05412.JPG',
    thumb: 'assets/images/wedding/HUG05412.JPG',
    subHtml: `<div class="lg-sub-html"><h4>Tình yêu đích thực đứng về phía nhau trong những ngày tốt đẹp và sát cánh hơn trong những ngày tồi tệ</h4></div>`,
  },
  {
    src: 'assets/images/wedding/HUG05567.JPG',
    thumb: 'assets/images/wedding/HUG05567.JPG',
    subHtml: `<div class="lg-sub-html"><h4>Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí</h4></div>`,
  },
];

function formatDateTime(dateStr) {
  if (!dateStr) return '';

  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
