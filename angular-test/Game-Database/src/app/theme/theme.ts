export interface Theme {
  name: string;
  title: string;
  description: string,
  properties: any;
}

export const Default: Theme = {
  name: "Default",
  title: 'Old Default Theme',
  description: 'A bit weird, but not bad to look at',
  properties: {
    "--color1-1": "#0AC48C",
    "--color1-2": "#22AF86",
    "--color1-3": "#399A80",
    "--color1-4": "#50857A",

    "--color2-1": "#C41C5C",
    "--color2-2": "#AD3162",
    "--color2-3": "#964668",
    "--color2-4": "#7F5B6E",

    "--background-default": "#677074",
    "--background-secondary": "#677074",

    "--text-main": "#ffffff",
    "--text-on-color1": "#ffffff",
    "--text-on-color2": "#ffffff",
    "--text-logo": "#ffffff",
    "--text-on-background": "#ffffff",
    "--text-shadow": "#000000",

    "--image-background-color": "#000000",

    "--glow1": "#399A80",
    "--glow2": "#0AC48C",

    "--border": "#000000",

    "--thumbs-up": "#5ee432",
    "--thumbs-down": "#ef4655",

  }
};

export const dark: Theme = {
  name: "Dark",
  title: 'Darker Theme',
  description: 'The typical choice for the typical human being',
  properties: {
    "--color1-1": "#060B39",
    "--color1-2": "#1E0E3E",
    "--color1-3": "#361042",
    "--color1-4": "#4E1247",

    "--color2-1": "#AD1A58",
    "--color2-2": "#951854",
    "--color2-3": "#7D1650",
    "--color2-4": "#71154E",

    "--background-default": "#65144B",
    "--background-secondary": "#65144B",

    "--text-main": "#361042",
    "--text-on-color1": "#C41C5C",
    "--text-on-color2": "#4E1247",
    "--text-logo": "#060B39",
    "--text-on-background": "#65144B",
    "--text-shadow": "#C41C5C",

    "--image-background-color": "#060B39",

    "--glow1": "#4E1247",
    "--glow2": "#361042",

    "--border": "#65144B",

    "--thumbs-up": "#951854",
    "--thumbs-down": "#951854",
  }
};

export const Purple: Theme = {
  name: "Purple",
  title: 'Blue/Purple mix',
  description: 'This may hurt your eyes',
  properties: {
    "--color1-1": "#2900F8",
    "--color1-2": "#3D04E5",
    "--color1-3": "#5007D1",
    "--color1-4": "#640BBE",

    "--color2-1": "#C41C5C",
    "--color2-2": "#B11970",
    "--color2-3": "#9E1583",
    "--color2-4": "#8B1297",

    "--background-default": "#770EAA",
    "--background-secondary": "#770EAA",

    "--text-main": "#ffffff",
    "--text-on-color1": "#ffffff",
    "--text-on-color2": "#ffffff",
    "--text-logo": "#ffffff",
    "--text-on-background": "#ffffff",
    "--text-shadow": "#000000",

    "--image-background-color": "#000000",

    "--glow1": "#5007D1",
    "--glow2": "#2900F8",

    "--border": "#000000",

    "--thumbs-up": "#640BBE",
    "--thumbs-down": "#8B1297",
  }
};

export const Pinky: Theme = {
  name: "Pinky",
  title: 'Smash',
  description: 'Makes me think of smashed blackberries',
  properties: {
    "--color1-1": "#440340",
    "--color1-2": "#400432",
    "--color1-3": "#3C0523",
    "--color1-4": "#380615",

    "--color2-1": "#C41C5C",
    "--color2-2": "#A01747",
    "--color2-3": "#7C1131",
    "--color2-4": "#580C1C",

    "--background-default": "#340606",
    "--background-secondary": "#340606",

    "--text-main": "#677074",
    "--text-on-color1": "#504c4c",
    "--text-on-color2": "#677074",
    "--text-logo": "#440340",
    "--text-on-background": "#C41C5C",
    "--text-shadow": "#0e0d0d",

    "--image-background-color": "#000000",

    "--glow1": "#3A061C",
    "--glow2": "#400432",

    "--border": "#340606",

    "--thumbs-up": "#677074",
    "--thumbs-down": "#677074",
  }
};

export const Fresh: Theme = {
  name: "Fresh",
  title: 'Fresh',
  description: 'I accidentally made a transformer',
  properties: {
    "--color1-1": "#00EAFF",
    "--color1-2": "#40F0FF",
    "--color1-3": "#80F5FF",
    "--color1-4": "#C0FAFF",

    "--color2-1": "#C41C5C",
    "--color2-2": "#D35585",
    "--color2-3": "#E28EAE",
    "--color2-4": "#F1C7D7",

    "--background-default": "#FFFFFF",
    "--background-secondary": "#FFFFFF",

    "--text-main": "#ffffff",
    "--text-on-color1": "#0e0d0d",
    "--text-on-color2": "#0e0d0d",
    "--text-logo": "#D9E1EB",
    "--text-on-background": "#0e0d0d",
    "--text-shadow": "#0e0d0d",

    "--image-background-color": "#0e0d0d",

    "--glow1": "#C0FAFF",
    "--glow2": "#40F0FF",

    "--border": "#0e0d0d",

    "--thumbs-up": "#0e0d0d",
    "--thumbs-down": "#0e0d0d",
  }
};

export const Electric: Theme = {
  name: "Electric",
  title: 'Electric',
  description: 'Lightning Mcqueen',
  properties: {
    "--color1-1": "#EAFF00",
    "--color1-2": "#C7D718",
    "--color1-3": "#A4AE2F",
    "--color1-4": "#818646",

    "--color2-1": "#C7D718",
    "--color2-2": "#A4AE2F",
    "--color2-3": "#939A3B",
    "--color2-4": "#818646",

    "--background-default": "#5D5D5D",
    "--background-secondary": "#5D5D5D",

    "--text-main": "#ffffff",
    "--text-on-color1": "#0e0d0d",
    "--text-on-color2": "#0e0d0d",
    "--text-logo": "#AB2D5D",
    "--text-on-background": "#0e0d0d",
    "--text-shadow": "#0e0d0d",

    "--image-background-color": "#913D5D",

    "--glow1": "#AB2D5D",
    "--glow2": "#C41C5C",

    "--border": "#0e0d0d",

    "--thumbs-up": "#0e0d0d",
    "--thumbs-down": "#0e0d0d",
  }
};