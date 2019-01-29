// Parel => Avatar

type Props = {
    shape: 'ROUNDED' | 'SQUARE',
    width: 'SMALL' | 'MEDIUM' | 'LARGE',
    color: 'DEFAULT' | string
}

// Raymond
type Props = {
    type: 'PRIMARY' | 'CANCEL' | 'INFO' | 'DEFAULT'
    leftIcon: string,
    onClick: () => void
}

// Andre
type Props = {
    leftComponent: React$Component | string,
    centerComponent: React$Component | string,
    rightComponent: React$Component | string,
    containerStyle: Style,    
}

//Nelvson
ListItem 
type Props = {
    text: string,
    containerStyle: Style,
    onClick?: () => void
}

// Richie
type Props = {
    imageUrl: string,
    containerStyle: Style,
    text: string,
    buttonText: string,
    onClick: () => Void
}

// Cindy
type Props = {
    size: "SMALL" | "MEDIUM" | "LARGE",
    color: 'PRIMARY' | 'CANCEL' | 'INFO' | 'DEFAULT' ,
    style: Object
}
