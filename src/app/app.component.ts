import { Component, HostListener, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;

  @HostListener('window:click', ['$event']) click(event: MouseEvent): void {
    this.activePanel = null;
  }

  config: SwiperOptions = {
    loop: false,
    navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 'auto'
  };

  hoverIndex: number | null = null;

  title = 'ng-tailwind-css-facebook';

  activePanel:
    | 'plus-panel'
    | 'msg-panel'
    | 'notification-panel'
    | 'more-panel'
    | null = null;

  leftBlockList = [
    {
      name: '布魯斯',
      img: 'https://bruce-fe-fb.web.app/image/avator.png',
    },
    {
      name: '活動',
      img: 'https://bruce-fe-fb.web.app/image/left/activity.svg',
    },
    {
      name: '天氣',
      img: 'https://bruce-fe-fb.web.app/image/left/cloudy.png',
    },
    {
      name: '災害應變中心',
      img: 'https://bruce-fe-fb.web.app/image/left/dynamic.svg',
    },
    {
      name: '新冠病毒資訊中心',
      img: 'https://bruce-fe-fb.web.app/image/left/facemask.svg',
    },
    {
      name: '社團',
      img: 'https://bruce-fe-fb.web.app/image/left/friend.svg',
    },
    {
      name: '企業管理平台',
      img: 'https://bruce-fe-fb.web.app/image/left/job.png',
    },
    {
      name: 'Messenger',
      img: 'https://bruce-fe-fb.web.app/image/left/messenger.svg',
    },
    {
      name: '近期廣告動態',
      img: 'https://bruce-fe-fb.web.app/image/left/pay.png',
    },
    {
      name: '朋友名單',
      img: 'https://bruce-fe-fb.web.app/image/left/sale.png',
    },
    {
      name: '最愛',
      img: 'https://bruce-fe-fb.web.app/image/left/star.svg',
    },
    {
      name: 'Marketplace',
      img: 'https://bruce-fe-fb.web.app/image/left/store.svg',
    },
    {
      name: 'Watch',
      img: 'https://bruce-fe-fb.web.app/image/left/watchingTv.svg',
    },
  ];

  openPanel(
    panelName:
      | 'plus-panel'
      | 'msg-panel'
      | 'notification-panel'
      | 'more-panel'
      | null,
    event: MouseEvent
  ): void {
    event.stopPropagation();
    this.activePanel = panelName;
  }

  stopPropagation(event: any): void {
    event.stopPropagation();
  }

  slidePrev(){
    this.swiper.swiperRef.slideNext(100);
  }

  slideNext(){
    this.swiper.swiperRef.slidePrev(100);
  }

}
