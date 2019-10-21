import { User } from './../../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  elList: Array<User> = [
    new User("Tomas","Mohol by niekto napísať čo sa myslí pod pojmom manažment?", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("Juraj123","Celkom pekne vysvetlené to je na slajde 20", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("Filip0","Pozri sa na ENG wiki, tam je to tiež zrozumyteľne poísané", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("Ondrej007","V kontexte požiadaviek to je proces posudzovania, schvaľovania, prioritizácia a sledovanie požiadaviek. Jeho cieľom je vytvoriť zoznam prioritných požiadaviek, ktoré posunú organizáciu k jej strategickým cieľom.", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    /*new User("5 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("6 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("7 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("8 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("9 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("10 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("11 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("12 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("13 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("14 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("15 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("16 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("17 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("18 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("19 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("20 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("21 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("22 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("23 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("24 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("25 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("26 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("27 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("28 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),
    new User("29 Lorem ipsum dolor sit amet", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"),*/
  ];

  constructor() { }

  ngOnInit() {
  }

}
