{
    
    name: "Chessis"
    age:60
    weight:120
    height: "7'2"
    appearance: "Humanoid from afar, light coating of white and cream colored fur, tail, slitted eyes visisble close up"

    bank: 15
    
    equipped:[{name: "Purposed Sheathes", weight: 2}, Targe, simple clothes, potion belt,  cloth mask, light boots, waterskin, 3 lockpicks, 2 candles, a tinderbox, hook (metal), 15 ft rope]

    stats: {
        affinity:74
        power:96
        will:21
        cunning:39
        charisma:66
        resistance:87
    }

    hp: {
        Head: 1d4
        Body: 2d4
        Internals: 1d4
        Limbs: [
            {
                limb: "arm (L)",
                hp: 1d4
            }
        ]
        Tail: 1d4
    }

    me: [
        "miasmic boon:buring up"
        "miasmic penalty:weak lungs",
    ]


    race: {
        type:changeling
        skills: [Charisma increases by 10, Affinity increases by 5, Power decreases by 10]
        senses:[heightend smell]
        languages:[akeen, gutter]
        movement type:"Quadrupedal"
        composure:30
    }



    class: {
        type: mutator
        abilities:[Wayfinder, Cool Headed, Endurance]
        subclass:"peak perfection"
    }

    origin: {
        type: scoundrel
        Affinity: bandit
    }
}

