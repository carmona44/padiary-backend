import { registerEnumType } from "@nestjs/graphql";

export enum PlayerPosition {
    REVES,
    DRIVE
}

registerEnumType(PlayerPosition, {
    name: 'PlayerPosition',
});

export enum PlayerLevel {
    PRO,
    PRIMERA,
    SEGUNDA,
    TERCERA,
    CUARTA,
    QUINTA
}

registerEnumType(PlayerLevel, {
    name: 'PlayerLevel',
});

export enum PlayerPredominantHand {
    DERECHA,
    IZQUIERDA
}

registerEnumType(PlayerPredominantHand, {
    name: 'PlayerPredominantHand',
});

export enum Country {
    SPAIN,
    ARGENTINA,
    SUECIA,
    FRANCIA,
    ITALIA,
    BRASIL,
    PORTUGAL
}

registerEnumType(Country, {
    name: 'Country',
});

export enum Shot {
    REVES,
    DERECHA,
    VOLEA_DERECHA,
    VOLEA_REVES,
    BANDEJA,
    SMASH,
    DEJADA,
    SAQUE
}

registerEnumType(Shot, {
    name: 'Shot',
});
