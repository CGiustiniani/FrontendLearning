import { Component } from "@angular/core";

interface ITeaser {
  title: string;
  id: number;
  excerpt: string;
  imagePath: string;
  published: boolean;
}

@Component({
  selector: "todo-app",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  teasers: Array<ITeaser> = [
    {
      title: "Lorem ipsum dolor sit amet",
      id: 1,
      excerpt:
        "Consectetur adipiscing elit. Nunc viverra, felis id pharetra dapibus, odio augue placerat enim, non finibus lectus purus nec ex. Curabitur bibendum et mi in dictum.",
      imagePath:
        "https://dummyimage.com/600x400/4fa6f7/ffffff.png&text=Lorem+ipsum+dolor+sit+amet",
      published: true
    },
    {
      title: "Fusce ullamcorper",
      id: 2,
      excerpt:
        "Purus ut lorem efficitur luctus. Aenean accumsan ante id sem sodales vulputate.",
      imagePath:
        "https://dummyimage.com/600x400/442df0/fffca8.png&text=Fusce+ullamcorper",
      published: true
    },
    {
      title: "Donec aliquet velit sit amet aliquam pellentesque",
      id: 3,
      excerpt:
        "Quisque ac risus quis dui scelerisque ullamcorper in at justo. Ut vestibulum sem sed lacus tristique dignissim.",
      imagePath:
        "https://dummyimage.com/600x400/e62753/ffffff.png&text=Donec+aliquet+velit+sit+amet+aliquam+pellentesque",
      published: false
    },
    {
      title: "Integer semper rhoncus",
      id: 4,
      excerpt:
        "velit vitae pharetra. Suspendisse vel mollis ante. Ut mollis erat non est lacinia, ac tincidunt lectus vulputate.",
      imagePath:
        "https://dummyimage.com/600x400/5c4b4f/ffffff.png&text=Integer+semper+rhoncus",
      published: true
    },
    {
      title: "Duis eget tellus ligula",
      id: 5,
      excerpt:
        "Aenean porta maximus ante, a facilisis sem fermentum non. Etiam porta neque ut sollicitudin sagittis.",
      imagePath:
        "https://dummyimage.com/600x400/68c7a9/ffffff.png&text=Duis+eget+tellus+ligula",
      published: true
    }
  ];
}
