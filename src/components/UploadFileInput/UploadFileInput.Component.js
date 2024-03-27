import { MuiFileInput } from "mui-file-input";
import { AlertService } from "services";
import React from "react";


function UploadFileInput({ onComplete, }) {

    const [file, setFile] = React.useState(null)
    const [errorFile, setErrorFile] = React.useState(false)
    const [sizeFile] = React.useState(10000000)

    const formatBytes = (bytes, decimals = 2) => {
        if (!+bytes) return '0 Bytes'

        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

        const i = Math.floor(Math.log(bytes) / Math.log(k))

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }
    const handleChangeFile = (newValue) => {
     
        let errorsUpload = false

        if (newValue !== null) {

            let ext = newValue.name.split('.').pop();
        
            if (!['png' , 'jpg'].includes(ext)) {
                AlertService.error({ text : `ไม่รองรับการอัปโหลดไฟล์นามสกุล .${ext}` })
                errorsUpload = true
            }
            

            if (newValue.size > sizeFile) {
                AlertService.error({ text : `ไม่สามารถอัปโหลดไฟล์ขนาดมากกว่า ${formatBytes(sizeFile)} ได้` })
                errorsUpload = true
            }
        }

        onComplete(errorsUpload ? null : newValue)
        setFile(errorsUpload ? null : newValue)
        setErrorFile(errorsUpload)
    }

    return (
        <MuiFileInput
            size='small'
            fullWidth
            error={errorFile}
            value={file}
            onChange={handleChangeFile}
        />
    )

}

export default UploadFileInput