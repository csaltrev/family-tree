const chart_config = {
    chart: {
        container: "#family-tree",
        connectors: {
            type: 'curve'
        },
        scrollbar: "fancy",
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
                            desc: "1967-presente"
                        },
                        image: "img/man.png",
                        HTMLclass: 'orange',
                        children: [{
                                text: {
                                    name: "Carlos Saltijeral Sosa",
                                    title: "Bisabuelo",
                                    desc: "1967-presente"
                                },
                                image: "img/man.png",
                                HTMLclass: 'orange'
                            },
                            {
                                text: {
                                    name: "Cruz Garza Antúnez",
                                    title: "Bisabuela",
                                    desc: "1967-presente"
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
                            desc: "1967-presente"
                        },
                        image: "img/woman.png",
                        HTMLclass: 'yellow',
                        children: [{
                                text: {
                                    name: "Jesus Hernández",
                                    title: "Bisabuelo",
                                    desc: "1967-presente"
                                },
                                image: "img/man.png",
                                HTMLclass: 'orange'
                            },
                            {
                                text: {
                                    name: "<tbd>",
                                    title: "Bisabuela",
                                    desc: "1967-presente"
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
                    name: "Eida Treviño Llamas",
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
                                    name: "Nabor Treviño",
                                    title: "Bisabuelo",
                                    desc: "1967-presente"
                                },
                                image: "img/man.png",
                                HTMLclass: 'orange'
                            },
                            {
                                text: {
                                    name: "<tbd>",
                                    title: "Bisabuela",
                                    desc: "1967-presente"
                                },
                                image: "img/woman.png",
                                HTMLclass: 'yellow'
                            }
                        ]
                    },
                    {
                        text: {
                            name: "Alicia Llamas",
                            title: "Abuela",
                            desc: "1945-presente"
                        },
                        image: "img/woman.png",
                        HTMLclass: 'yellow',
                        children: [{
                                text: {
                                    name: "<tbd>",
                                    title: "Bisabuelo",
                                    desc: "1967-presente"
                                },
                                image: "img/man.png",
                                HTMLclass: 'orange'
                            },
                            {
                                text: {
                                    name: "<tbd>",
                                    title: "Bisabuela",
                                    desc: "1967-presente"
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