const cars = [
  {
    name: "458 Italia",
    manufacturer: "Ferrari",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida pellentesque diam ac venenatis. Donec magna leo, lobortis eu augue eget, mollis luctus diam. Integer quis faucibus elit. In sed odio quis libero dignissim accumsan eu at arcu. Fusce pretium, quam ut malesuada porta, libero elit pulvinar odio, at fermentum nunc dolor non purus. Donec velit turpis, porta nec elit eget, placerat elementum dolor. In et pellentesque nibh. Vestibulum a euismod erat, et consectetur eros. Proin id faucibus libero.",
    price: 211953,
    horsepower: 570,
    stock: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  },
  {
    name: "Panamera Turbo S",
    manufacturer: "Porsche",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed turpis erat. Ut ultricies nulla quam, vitae semper eros finibus ut. Etiam posuere lorem nec est posuere, in laoreet neque posuere. Morbi nunc sem, sodales a fermentum vel, commodo nec mi. Phasellus semper sit amet massa in porta. Sed efficitur et lectus sit amet eleifend. Nunc suscipit nisi sit amet luctus porttitor. Nullam a augue quis ex iaculis tristique aliquet ut massa. Proin lobortis nunc sit amet fringilla fringilla. Nam sit amet risus pharetra mi imperdiet venenatis. Etiam eu dolor in velit tempor varius eget id neque.",
    price: 179800,
    horsepower: 620,
    stock: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  },
  {
    name: "R8",
    manufacturer: "Audi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies leo arcu, et vulputate orci tempus non. Ut eu consectetur libero. Ut malesuada lacus felis, rhoncus facilisis est commodo at. Nam tempor et ex et lacinia. Nulla blandit metus velit, nec ultrices turpis pretium vitae. Sed nisl eros, porta sit amet tempus non, facilisis nec dolor. Donec elementum quam arcu, fermentum hendrerit dolor porttitor ut. Vestibulum convallis leo enim, ac feugiat risus placerat eu. Proin posuere elementum dapibus. Donec suscipit justo non leo luctus, vitae pretium leo ornare.",
    price: 142700,
    horsepower: 602,
    stock: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  },
  {
    name: "600LT",
    manufacturer: "McLaren",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et volutpat erat. Sed sed enim faucibus, eleifend dui sit amet, imperdiet risus. Sed magna justo, auctor rutrum sem eu, accumsan fringilla lectus. Ut id enim id erat lacinia viverra ac non lacus. Integer id scelerisque eros. Fusce pulvinar mi metus, eu volutpat libero faucibus eu. Etiam blandit erat vitae tincidunt lobortis. Phasellus tristique magna nec pharetra consequat. Nam congue tincidunt ligula, non congue nulla tempus ut. Etiam efficitur molestie congue. Etiam ut gravida nunc, at viverra erat. Nullam et ornare ipsum, eget bibendum nibh. Duis turpis ligula, ornare at libero a, tempus convallis lectus. Ut dignissim pretium mi a aliquam.",
    price: 256500,
    horsepower: 592,
    stock: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1617814086906-d847a8bc6fca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2652&q=80",
  },
  {
    name: "M3",
    manufacturer: "BMW",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit tortor mauris, nec condimentum libero consectetur vitae. Etiam scelerisque lacinia nulla quis lacinia. Duis vitae consectetur turpis. Pellentesque accumsan lacinia elit, vitae ornare nisl vulputate id. Pellentesque nec tellus elementum tortor ultricies fermentum. Praesent sapien velit, efficitur in ornare et, consectetur sit amet neque. Morbi consequat leo efficitur, tristique nulla a, tristique sapien. Vestibulum elementum aliquet ante, quis accumsan libero porta non. Proin ut sollicitudin lorem. In congue nisi mauris, non sagittis odio iaculis nec. Donec lobortis eros sit amet accumsan eleifend. Praesent tellus ante, sollicitudin non nunc pulvinar, finibus elementum sapien. Aliquam tincidunt, magna ac laoreet volutpat, urna diam suscipit odio, sed semper ligula leo eget nunc.",
    price: 70895,
    horsepower: 503,
    stock: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80",
  },
  {
    name: "Model S",
    manufacturer: "Tesla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et facilisis ante, eget aliquam ex. Nulla nec bibendum enim, vitae vehicula neque. Mauris malesuada sem ac ex auctor, vel congue tortor interdum. Donec id pharetra turpis, nec mattis orci. Nunc sed dictum nibh. Suspendisse ac sagittis turpis. Aenean rutrum sem non massa cursus condimentum. Mauris sit amet urna fermentum, convallis ipsum tempus, elementum quam. In hac habitasse platea dictumst. Morbi semper libero nunc, in fermentum augue blandit a. Sed ac ante id lorem pulvinar efficitur vitae vel ipsum.",
    price: 91990,
    horsepower: 1020,
    stock: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1536617621572-1d5f1e6269a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80",
  },
  {
    name: "Aventador SVJ",
    manufacturer: "Lamborghini",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisl enim, convallis non felis nec, rutrum sagittis erat. Fusce commodo quis odio quis porta. Fusce tempus nisi eget pulvinar viverra. Nullam lobortis massa orci, vitae vehicula quam venenatis tincidunt. Praesent mi lorem, tempor in mi at, viverra suscipit ex. Quisque at tellus mi. Nulla facilisi. Nullam volutpat lectus nibh, eu accumsan lorem gravida vitae. Sed et felis lacus. Nam eu sollicitudin nibh, at imperdiet ex. Etiam cursus, tellus vitae sagittis blandit, purus eros aliquam enim, vitae tincidunt augue leo vehicula nunc. Ut mollis gravida purus, non auctor massa. Ut ut orci vel ipsum condimentum dapibus ut vel lacus. Aliquam erat volutpat.",
    price: 517770,
    horsepower: 759,
    stock: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1570829174962-38c53efc5e5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1644&q=80",
  },
  {
    name: "C200 AMG",
    manufacturer: "Mercedes-Benz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus lorem ut egestas mattis. Sed dignissim tincidunt velit vel aliquam. Maecenas lacinia velit nunc, id fermentum lacus tempor bibendum. Ut pellentesque arcu leo, vitae rhoncus neque tempor ut. Pellentesque neque diam, tristique ut nunc molestie, facilisis suscipit quam.",
    price: 41600,
    horsepower: 503,
    stock: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1584936684506-c3a7086e8212?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2660&q=80",
  },
  {
    name: "Camaro ZL1 1LE",
    manufacturer: "Chevrolet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta turpis sagittis neque finibus pellentesque. Curabitur hendrerit vitae nulla sit amet fermentum. Pellentesque sollicitudin odio vitae nulla viverra euismod at vel elit. Fusce facilisis tincidunt elit non varius. Donec sagittis, dui quis efficitur varius, nunc quam faucibus elit, id ullamcorper magna ligula sit amet odio. Mauris ac lectus et turpis tincidunt ullamcorper nec a nibh. In eu felis leo. Fusce laoreet vitae risus sit amet aliquet. Ut eget sollicitudin quam, a interdum orci. Nunc diam sem, aliquet quis dolor sit amet, sagittis consequat neque.",
    price: 75985,
    horsepower: 650,
    stock: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2647&q=80",
  },
];

module.exports = cars;
