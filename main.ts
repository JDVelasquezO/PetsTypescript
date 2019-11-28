import { Pet } from "./models/Pet.js";
import { Dog } from "./models/Dog.js";
import { Cat } from './models/Cat.js';
import { Parrot } from './models/Parrot.js';
import { Fish } from './models/Fish.js';

let vm = new Vue({
  el: "#app",
  data: {
    name: "",
    size: "",
    age: "",
    weigth: "",
    race: "",
    eyesColor: "",
    featherColor: "",
    type: "",
    petsNames: ["Perro", "Gato", "Loro", "Pez"],
    pet: Pet,
    pets: [],
    selected: ""
  },
  methods: {
    register(
      name: string,
      size: number,
      age: number,
      weigth: number,
      specification: string
    ) {
      this.validatePet(specification, name, size, age, weigth);
      this.pets.push(this.pet);
      this.reset(this.$refs.name);
    },
    validatePet (specification: string, name: string, size: number, age: number, weigth: number) {
        switch (specification) {
            case "Perro":
              this.pet = new Dog(name, size, age, weigth, this.race);
              break;
            case 'Gato'
              this.pet = new Cat(name, size, age, weigth, this.eyesColor);
              break;
            case 'Loro'
              this.pet = new Parrot(name, size, age, weigth, this.featherColor);
              break;
            case 'Pez'
              this.pet = new Fish(name, size, age, weigth, this.type);
              break;
            default:
              break;
          }
    },
    reset(element: HTMLElement) {
      element.focus();
      this.name = '';
      this.size = '';
      this.age = '';
      this.weigth = '';
      this.selected = '';
    }
  },
  mounted() {
    this.reset(this.$refs.name);
  }
});
