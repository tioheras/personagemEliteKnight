class Heroi{
    constructor(nome, level, classe)
    { this.nome = nome;
      this.level = level;
      this.classe = classe;}
  
      atacar(){
          let ataque;
          switch (this.classe){
            case "mago":
              ataque = "usou magia de ataque";
              break
            case "knight":
              ataque = "atacou com sua clava de espinhos";
              break
            case "paladino":
              ataque = "usou seu arco de ataque com flecha em área";
              break
            case "druida":
              ataque = "usou magia de cura em grupo";
              break
            
          }
          console.log(`O ${this.classe} atacou usando o ${ataque}`);
      }
  }

  const heroi1 = new Heroi("Tio Heras", 1026, "knight");
  const heroi2 = new Heroi("Varios Cry", 1170, "mago");
  const heroi3 = new Heroi("Gui nho", 970, "paladino");
  const heroi4 = new Heroi("Ziktrak", 978, "druida");

  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();