const chart_config = {
    chart: {
        container: "#family-tree",
        connectors: {
            type: 'curve'
        },
        node: {
            HTMLclass: 'node'
        }
    },
    nodeStructure: {
        text: {
            name: "Carlos Saltijeral Treviño",
            title: "Yo",
            desc: "2000-presente"
        },
        image: "img/man.png",
        HTMLclass: 'orange',
        children: [{
                text: {
                    name: "Carlos Saltijeral Hernández",
                    title: "Padre",
                    desc: "1967-presente"
                },
                image: "img/man.png",
                HTMLclass: 'orange',
                children: [{
                        text: {
                            name: "Mario Saltijeral Garza",
                            title: "Abuelo",
                            desc: "1938-2016"
                        },
                        image: "img/man.png",
                        HTMLclass: 'orange',
                        children: [{
                                text: {
                                    name: "Carlos Saltijeral Sosa",
                                    title: "Bisabuelo"
                                },
                                image: "img/man.png",
                                HTMLclass: 'orange'
                            },
                            {
                                text: {
                                    name: "Cruz Garza Antúnez",
                                    title: "Bisabuela"
                                },
                                image: "img/woman.png",
                                HTMLclass: 'yellow'
                            }
                        ]
                    },
                    {
                        text: {
                            name: "Martha Hernández",
                            title: "Abuela",
                            desc: "1942-2009"
                        },
                        image: "img/woman.png",
                        HTMLclass: 'yellow',
                        children: [{
                                text: {
                                    name: "Jesus Hernández Pámanes",
                                    title: "Bisabuelo"
                                },
                                image: "img/man.png",
                                HTMLclass: 'orange'
                            },
                            {
                                text: {
                                    name: "Esperanza González Allende",
                                    title: "Bisabuela"
                                },
                                image: "img/woman.png",
                                HTMLclass: 'yellow'
                            }
                        ]
                    }
                ]
            },
            {
                text: {
                    name: "Eida Alicia Treviño Llamas",
                    title: "Madre",
                    desc: "1971-presente"
                },
                image: "img/woman.png",
                HTMLclass: 'yellow',
                children: [{
                        text: {
                            name: "Ricardo Treviño Mendiola",
                            title: "Abuelo",
                            desc: "1943-presente"
                        },
                        image: "img/man.png",
                        HTMLclass: 'orange',
                        children: [{
                                text: {
                                    name: "Nabor Treviño Benavides",
                                    title: "Bisabuelo"
                                },
                                image: "img/man.png",
                                HTMLclass: 'orange'
                            },
                            {
                                text: {
                                    name: "Esthela Mendiola Lozano",
                                    title: "Bisabuela"
                                },
                                image: "img/woman.png",
                                HTMLclass: 'yellow'
                            }
                        ]
                    },
                    {
                        text: {
                            name: "Alicia Llamas Díaz-Couder",
                            title: "Abuela",
                            desc: "1947-presente"
                        },
                        image: "img/woman.png",
                        HTMLclass: 'yellow',
                        children: [{
                                text: {
                                    name: "Miguel Llamas del Hoyo",
                                    title: "Bisabuelo"
                                },
                                image: "img/man.png",
                                HTMLclass: 'orange'
                            },
                            {
                                text: {
                                    name: "Alicia Díaz-Couder Calero",
                                    title: "Bisabuela"
                                },
                                image: "img/woman.png",
                                HTMLclass: 'yellow'
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

new Treant(chart_config);