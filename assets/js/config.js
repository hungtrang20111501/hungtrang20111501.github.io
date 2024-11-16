let biicore = {
  templatePremium: true,
  isPremium: true,
  bgMusic: 'assets/audio/BeautifulInWhite-ShaneFilan-524801.mp3',
  alert: '[]',
  effect: { type: 'heart' },
  isAutoPlay: false,
};

var photoGalleries = [
  {
    src: 'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae0f3395f427129073767/large.jpg',
    thumb:
      'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae0f3395f427129073767/small.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn</h4></div>`,
  },
  {
    src: 'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae0cb7604de197800c927/large.jpg',
    thumb:
      'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae0cb7604de197800c927/small.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả một cảm giác - đó là sự quan tâm, chia sẻ, giúp đỡ, hy sinh</h4></div>`,
  },
  {
    src: 'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae0aac528ddd5c4030deb/large.jpg',
    thumb:
      'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae0aac528ddd5c4030deb/small.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Vì vậy, để được ai đó nhìn thấy đầy đủ và được yêu mến dù thế nào đi nữa — đây là một sự dâng hiến của con người có thể là điều kỳ diệu</h4></div>`,
  },
  {
    src: 'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae092c133c5a8550e5db0/large.jpg',
    thumb:
      'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae092c133c5a8550e5db0/small.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá</h4></div>`,
  },
  {
    src: 'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae07d7604de197800c926/large.jpg',
    thumb:
      'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae07d7604de197800c926/small.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy vọng</h4></div>`,
  },
  {
    src: 'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae06c8af6d409de0ba89e/large.jpg',
    thumb:
      'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae06c8af6d409de0ba89e/small.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Tôi yêu bạn vì tất cả những gì bạn đang có, tất cả những gì bạn đã có, và tất cả những gì bạn chưa hiện hữu</h4></div>`,
  },
  {
    src: 'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae05245356fcf1309b3a1/large.jpg',
    thumb:
      'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae05245356fcf1309b3a1/small.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Tôi có thể chinh phục thế giới bằng một tay miễn là bạn đang nắm tay kia</h4></div>`,
  },
  {
    src: 'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae0345d14fd214a0928cf/large.jpg',
    thumb:
      'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae0345d14fd214a0928cf/small.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Tình yêu đích thực đứng về phía nhau trong những ngày tốt đẹp và sát cánh hơn trong những ngày tồi tệ</h4></div>`,
  },
  {
    src: 'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae0123a892203590b808e/large.jpg',
    thumb:
      'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae0123a892203590b808e/small.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí</h4></div>`,
  },
  {
    src: 'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672adfe9c3eaef009508bc22/large.jpg',
    thumb:
      'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672adfe9c3eaef009508bc22/small.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Đối với thế giới, bạn có thể là một người, nhưng với một người, bạn là cả thế giới</h4></div>`,
  },

  {
    src: 'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae06c8af6d409de0ba89e/large.jpg',
    thumb:
      'https://cdn.biihappy.com/ziiweb/website/672acf9b42b0c72b2f022ea0/galleries/672ae06c8af6d409de0ba89e/small.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó</h4></div>`,
  },
];
