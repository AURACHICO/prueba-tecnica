import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/services/registro.service';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public registros: Array<any> = []

  constructor(private registroService: RegistroService) {

    this.registroService.getRegistro().subscribe((resp: any) => {
      this.registros = resp
    })
  }
  filterPost='';


  ngOnInit() {


  }


}
