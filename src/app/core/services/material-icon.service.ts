import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MatIconService {
  registerSvgIcons(
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer
  ) {
    matIconRegistry
      .addSvgIcon(
        'briefcase',
        domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/briefcase-icon.svg'
        )
      )
      .addSvgIcon(
        'document',
        domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/document-icon.svg'
        )
      )
      .addSvgIcon(
        'home',
        domSanitizer.bypassSecurityTrustResourceUrl('../assets/home-icon.svg')
      )
      .addSvgIcon(
        'menu',
        domSanitizer.bypassSecurityTrustResourceUrl('../assets/menu-icon.svg')
      )
      .addSvgIcon(
        'message',
        domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/message-icon.svg'
        )
      )
      .addSvgIcon(
        'piggy-bank',
        domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/piggy-bank-icon.svg'
        )
      )
      .addSvgIcon(
        'safe',
        domSanitizer.bypassSecurityTrustResourceUrl('../assets/safe-icon.svg')
      )
      .addSvgIcon(
        'user',
        domSanitizer.bypassSecurityTrustResourceUrl('../assets/user-icon.svg')
      )
      .addSvgIcon(
        'empty-wallet',
        domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/wallet-empty-icon.svg'
        )
      )
      .addSvgIcon(
        'filled-wallet',
        domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/wallet-filled-icon.svg'
        )
      )
      .addSvgIcon(
        'arrow-right',
        domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/arrow-right-icon.svg'
        )
      )
      .addSvgIcon(
        'arrow-down',
        domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/arrow-down-icon.svg'
        )
      )
      .addSvgIcon(
        'arrow-down',
        domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/arrow-down-icon.svg'
        )
      )
      .addSvgIcon(
        'check',
        domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/green-check-icon.svg'
        )
      ).addSvgIcon(
        'logout',
        domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/logout-icon.svg'
        )
      );
  }
}