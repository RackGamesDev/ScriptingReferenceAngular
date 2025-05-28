import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-receptor-archivo',
  imports: [NgIf],
  templateUrl: './receptor-archivo.component.html',
  styleUrl: './receptor-archivo.component.css'
})
export class ReceptorArchivoComponent {
isDragging = false;
  uploadProgress: number | null = null;
  uploadMessage: string | null = null;

  constructor() {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadFile(input.files[0]);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.uploadFile(event.dataTransfer.files[0]);
      event.dataTransfer.clearData();
    }
  }

  uploadFile(file: File) {
    this.uploadMessage = null;
    this.uploadProgress = null;
    const formData = new FormData();
    formData.append('file', file);
    console.log(file); //Metadatos del archivo
    file.text().then((text) => {console.log(text);}); //El contenido del archivo

    //No se puede guardar el archivo usando angular, habria que hacer una peticion a una api
  }
}
