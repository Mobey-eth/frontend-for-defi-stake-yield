import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    container: {
        display: "inline-grid",
        gridtemplateColumns: "auto auto auto",
        gap: theme.spacing(1),
        alignItems: "center"
    },
    tokenImg: {
        width: "19px"
    },
    amount: {
        fontWeight: 700
    }
})
)

interface BalanceMsgProps {
    label: string
    amount: number
    tokenImgSrc: string
}

export const BalanceMsg = ({ label, amount, tokenImgSrc }: BalanceMsgProps) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div>{label}</div>
            <div className={classes.amount}>
                <img className={classes.tokenImg} src={tokenImgSrc} alt="token Logo" /> {amount}
            </div>
        </div>
    )
}