# Angular-Quete-9

Projet Généré avec [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Pour démarrer le serveur de Development

après le `git colne` du projet:

```sh
cd angular-quete-9
npm install
ng serve
```

## Pour reproduire le code, suivez ces étapes:

### Etape 1

Après la création de l'application avec `ng new <myApp>`:

- créez le dossier `src/app/common`, dans ce dossier créez 2 fichiers:

`skill.model.ts`:

```ts
export class Skill {
  public name: string;
  public logo: string;
  public site: string;
}
```

`developer.model.ts`:

```ts
import { Skill } from "./skill.model";

export class Developer {
  public lastName: string;
  public firstName: string;
  public age: number;
  public sex: string;
  public bio: string;
  public skills: Skill[];
}
```

### Etape 2 créez les 2 component developer et skill

```sh
ng g c developer

ng g c skill
```

### Etape 3 rajouter le sélécteur `<app-skil>` dans `developer.component.html`:

```html
<p>developer works!</p>

<app-skill></app-skill>
```

faites la mème chose avec `developer.component.html` et `app.component.html`:

```html
<app-developer></app-developer>
```

### Etape 4 rajouter des nouvelles variables `aSkill` et `myDeveloper`

Dans `skill.component.ts`

```ts
import { Skill } from "../common/skill.model";

@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.scss"],
})
export class SkillComponent implements OnInit {
  aSkill: Skill;

  constructor() {}

  ngOnInit(): void {}
}
```

Dans `developer.component.ts`:

```ts
import { Developer } from "../common/developper.model";

@Component({
  selector: "app-developer",
  templateUrl: "./developer.component.html",
  styleUrls: ["./developer.component.scss"],
})
export class DeveloperComponent implements OnInit {
  myDeveloper: Developer;

  constructor() {}

  ngOnInit(): void {}
}
```

### Etape 5 créez une nouvelle instance `Developer` et l'assigner à `myDeveloper` dans la fonction `ngOnInit()` de `developer.component.ts`:

```ts
ngOnInit(): void {
  this.myDeveloper = new Developer();
}
```

### Etape 6 créez une nouvelle instance `Skill` et l'assigner à une nouvelle varaible dans la fonction `ngOnInit()` de `developer.component.ts`:

et mettez à jour ces propriétés

```ts
ngOnInit(): void {
  this.myDeveloper = new Developer();

  const devSkill = new Skill();
  devSkill.name = 'Angular';
  devSkill.site = "https://angular.io/";
  devSkill.logo = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
}
```

Puis mettez à jour les propriétes de `myDeveloper`:

```ts
...
...

this.myDeveloper.firstName = 'John';
this.myDeveloper.lastName = 'Doe';
this.myDeveloper.bio = 'Ninja Developer';
this.myDeveloper.skills = [devSkill];
```

### Etape 7 metter à jour `skill.component.html` pour afficher les differentes properties de `aSkill`:

```html
<div>
  <h3>{{ aSkill.name }}</h3>
  <p>{{ aSkill.site }}</p>
  <img src="{{ aSkill.logo }}" alt="" />
</div>
```

### Etape 8 metter à jour `developer.component.html` pour afficher les differentes properties de `myDeveloper`:

et on utilise la directive `*ngFor` pour itérer sur le tableau des `skills` de `myDeveloper`.

`[aSkill] = skill` sert à lier `aSkill` de `skill.component.ts` au `skill` de chaque itération.

```html
<div>
  <h2>{{ myDeveloper.firstName }} {{ myDeveloper.lastName }}</h2>
  <p>{{ myDeveloper.bio }}</p>
  <ul *ngFor="let skill of myDeveloper.skills">
    <li>
      <!-- {{ skill.name }} -->
      <app-skill [aSkill]="skill"></app-skill>
    </li>
  </ul>
</div>
```

Dans `skill.component.ts` rajoutez le décorateur `Input()` à `aSkill`, et n'oubliez de l'importer:

```ts
import { Component, Input, OnInit } from "@angular/core";

...

export class SkillComponent implements OnInit {
  @Input()
  aSkill: Skill;

  constructor() {}

  ngOnInit(): void {}
}
```
