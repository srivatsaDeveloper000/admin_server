export const log_master_service = () => {
    try {
        console.log("first")
    } catch (error : any) {
        return {
            type: "error",
            message: error.message,
            componentData: null
        }
    }
}