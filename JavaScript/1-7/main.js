class Taiyaki {
    constructor(filling) {
      this.filling = filling;
    }
    
    getFilling() {
      return `中身は${this.filling}です`;
    }
  }
  
  const taiyaki1 = new Taiyaki('あんこ');
  console.log(taiyaki1.getFilling());
  
  const taiyaki2 = new Taiyaki('クリーム');
  console.log(taiyaki2.getFilling());
  
  const taiyaki3 = new Taiyaki('チーズ');
  console.log(taiyaki3.getFilling());
  