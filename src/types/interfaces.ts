// interfaces/types under construction...

export interface Iheader {
  logo: string
  btnText: string
}

//nav[{}]
export interface Inav {
  name: string
  href: string
}

export interface Ihero {
  title: string
  subtitle: string
  btnText: string
  compText: string
  image: string
}

export interface Ifeatures {
  feature1: {
    pretitle: string
    title: string
    subtitle: string
    btnLink: string
    btnIcon: string
    image: string
  }
  feature2: {
    pretitle: string
    title: string
    subtitle: string
    btnLink: string
    btnIcon: string
    image: string
  }
  feature3: {
    pretitle: string
    title: string
    subtitle: string
    btnLink: string
    btnIcon: string
    image: string
  }
  feature4: {
    pretitle: string
    title: string
    subtitle: string
    btnLink: string
    btnIcon: string
    image: string
  }
}

export interface Iproducts {
  title: string
  cards: [
    {
      icon: string
      title: string
      description: string
      btnText: string
      delay: number
    },
    {
      icon: string
      title: string
      description: string
      btnText: string
      delay: number
    },
    {
      icon: string
      title: string
      description: string
      btnText: string
      delay: number
    }
  ]
}

export interface Itestimonials {
  title: string
  clients: [
    {
      message: string
      image: string
      name: string
      position: string
      borderColor: string
    },
    {
      message: string
      image: string
      name: string
      position: string
      borderColor: string
    },
    {
      message: string
      image: string
      name: string
      position: string
      borderColor: string
    },
    {
      message: string
      image: string
      name: string
      position: string
      borderColor: string
    },
    {
      message: string
      image: string
      name: string
      position: string
      borderColor: string
    },
    {
      message: string
      image: string
      name: string
      position: string
      borderColor: string
    }
  ]
}

export interface Iinstagram {
  title: string
  subtitle: string
  btnText: string
  img1: string
  img2: string
}

export interface Ifooter {
  logo: string
  links: [{ name: string; href: string }]
  newsletter: {
    title: string
    subtitle: string
  }
  form: {
    placeholder: string
    btnText: string
    smallText: string
  }
}

export interface Icopyright {
  link1: {
    name: string
    href: string
  }
  link2: {
    name: string
    href: string
  }
  copyText: string
  social: [{ icon: string; href: string }]
}
