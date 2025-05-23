import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista-completa',
  imports: [NgForOf, RouterOutlet],
  templateUrl: './lista-completa.component.html',
  styleUrl: './lista-completa.component.css'
})
export class ListaCompletaComponent {
  public lista = ["aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj"];
}
