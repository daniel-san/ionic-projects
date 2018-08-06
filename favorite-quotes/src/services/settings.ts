
export class SettingsService {
  private altBackground: boolean;


  setBackground(isAlt: boolean){
    this.altBackground = isAlt;
  }

  isAltBackground(){
    return this.altBackground;
  }
}
