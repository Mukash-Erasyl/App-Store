import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Repository } from 'src/app/options/repository'; 

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private repo: Repository ,
    private router: Router) { }

  get product(): Product {
    return this.repo.product;
}

get products(): Product[] {
return this.repo.products;
}

selectProduct(id: number) {
   this.repo.getProduct(id); ;
}


counter = 0;
settingAddEventFlag = false;
visible = false;

posts = [
  {
    user:"Ислам Махачев" , 
    imgLink:"https://sportkp.ru/sites/default/files/styles/post_content_1200x675_16_9/public/text-images/2023-03/20220226_zsa_p175_020_8__1679073862_1679073881.jpg?itok=tG_qgnaL" ,
    content:{
      text:"На Хабу похож !!!" ,
      imgLink:"https://i.pinimg.com/736x/5b/b7/7a/5bb77ae3fbce84396a2d06a33f68c85c.jpg",
      musicLink:""
    }
  } ,
  {
    user:"Александр Волкановский" , 
    imgLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgL1YMX7Eq5D3SsacVCVoGo3WsYMSk28Fvyw&usqp=CAU"
    , content:{
      text:"My city )))" ,
      imgLink:"https://public.mishka.travel/images/mini/2ed9dd87b456f1d.jpg",
      musicLink:"../../../../assets/musicMP/1.mp3"
    }
  } ,
  {
    user:"Конор Макгрегор" , 
    imgLink:"https://cdnn21.img.ria.ru/images/07e6/04/04/1781721518_0:0:1080:608_1920x0_80_0_0_d0df32e2481e6a4da495863d8cd74a49.jpg"
    , content:{
      text:"Champ-Champ" ,
      imgLink:"https://imagedelivery.net/4_JwVYxosZqzJ7gIDJgTLA/b1f6fe93-6b8c-40eb-4eb6-7281f3cdc100/16x9",
      musicLink:""
    }
  } ,
  {
    user:"Смех и Грех" , 
    imgLink:"https://img.pravda.ru/image/preview/article/8/3/3/1091833_five.jpeg"
    , content:{
      text:"Жиза" ,
      imgLink:"https://cs12.pikabu.ru/post_img/2022/02/19/6/1645257835177874140.jpg",
      musicLink:""
    }
  } ,
  {
    user:"Научпок" , 
    imgLink:"https://afisha.life/wp-content/uploads/2016/09/einstein2.jpg"
    , content:{
      text:"Наша планета со временем станет бескрайней пустыней, похожей на сегодняшний Марс. Сотни миллионов лет Солнце нагревалось, становилось ярче и горячее и будет продолжать это делать. Где-то через два с лишним миллиарда лет температура станет настолько высокой, что океаны, благодаря которым Земля пригодна для жизни, испарятся. Вся планета превратится в бескрайнюю пустыню. Как предсказывают учёные, в следующие несколько миллиардов лет Солнце превратится в красного гиганта и полностью поглотит Землю — планете определённо придёт конец." ,
      imgLink:"https://99px.ru/sstorage/53/2014/10/tmb_112230_8435.jpg",
      musicLink:""
    }
  } ,
  {
    user:"Дастин Порье" , 
    imgLink:"https://fightwave.ru/wp-content/uploads/2022/05/bez-imeni-1-30.jpg"
    , content:{
      text:"Я не куколд ребята!!" ,
      imgLink:"https://www.meme-arsenal.com/memes/2deccff626203f1b2cb4d109c78a93d9.jpg",
      musicLink:""
    }
  } ,
  {
    user:"Юмор" , 
    imgLink:"https://cdnn1.img.armeniasputnik.am/img/113/57/1135770_0:46:1000:674_1920x0_80_0_0_e80e068e90587475ffc2114a3d80268c.jpg"
    , content:{
      text:"" ,
      imgLink:"https://static.caravan.kz/image/landscape/600/636729.jpg",
      musicLink:""
    }
  } ,
  {
    user:"Ерасыл Сагынтаев" , 
    imgLink:"https://sun9-29.userapi.com/impf/c847217/v847217906/434d0/g5eL1ec6qns.jpg?size=1632x1224&quality=96&sign=8411142f44f3481098db3f8baf6604d9&type=album"
    , content:{
      text:"IT" ,
      imgLink:"https://nastroisam.ru/2014/it-technology-01.jpg",
      musicLink:""
    }
  } 
]


settingAddEvent = (idx:number ) => {

  this.counter = idx;

  this.settingAddEventFlag = !this.settingAddEventFlag;


}

deleteProduct = (id:number) => {
  this.repo.deleteProduct(id);
  this.settingAddEventFlag = !this.settingAddEventFlag;
}

  ngOnInit(): void {
  }





}
