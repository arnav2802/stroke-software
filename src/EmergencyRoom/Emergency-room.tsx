import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import PatientVitalsForm from './PatientVitalsForm';
import ABCDform from './ABCDform';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EmergencyRoom: React.FC = () => {
const [openDialog, setOpenDialog] = useState<string | null>(null);

const handleClickOpen = (dialogName: string) => {
  setOpenDialog(dialogName);
};

const handleClose = () => {
  setOpenDialog(null);
};


//'Patient Vitals', 'Provisional Diagnosis', 'Sample Taken', 'ABCD'

    return (
        <div className="md:flex-row bg-blue-100 h-screen w-full font-sans">

            {/* Main Content */}
            <div className="w-full p-4 space-y-4">
                <h1 className="text-3xl font-extrabold text-blue-700 text-center">Emergency room</h1>

                <div className="grid grid-cols-3 gap-4">
                        {/* Patient Vital */}
                        <Card sx={{ maxWidth: 265, maxHeight: 245 }}  className='bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow'>
                            <div className='flex '>
                                <CardMedia
                                    component="img"
                                    alt="report icon"
                                    height="120"
                                    width='60'
                                    image="src\assets\report-image.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Patient's Vital
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        fill vitals
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardActions>
                                <Button  onClick={() => handleClickOpen('patientVitals')}>
                                    Open
                                </Button>
                                <Dialog
                                    open={openDialog === 'patientVitals'}
                                    slots={{
                                        transition: Transition,
                                    }}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogTitle>{'Patient Vitals Form'}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                            <PatientVitalsForm/>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} >reset</Button>
                                        <Button onClick={handleClose} variant='outlined'>Submit</Button>
                                    </DialogActions>
                                </Dialog>
                            </CardActions>
                        </Card>
                        
                        {/* Provisinal Diagnosis */}
                        <Card sx={{ maxWidth: 265, maxHeight: 245 }}  className='bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow'>
                            <div className='flex '>
                                <CardMedia
                                    component="img"
                                    alt="report icon"
                                    height="120"
                                    width='60'
                                    image="src\assets\report-image.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Provisinal Diagnosis
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        provide diagnosis
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardActions>
                                <Button  onClick={() => handleClickOpen('provisionalDiagnosis')}>
                                    Open
                                </Button>
                                <Dialog
                                    open={openDialog === 'provisionalDiagnosis'}
                                    slots={{
                                        transition: Transition,
                                    }}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogTitle>{"Provisinal Diagnosis Form"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                            <PatientVitalsForm/>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} >reset</Button>
                                        <Button onClick={handleClose} variant='outlined'>Submit</Button>
                                    </DialogActions>
                                </Dialog>
                            </CardActions>
                        </Card>

                        {/* Sample Taken */}
                        <Card sx={{ maxWidth: 265, maxHeight: 245 }}  className='bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow'>
                            <div className='flex '>
                                <CardMedia
                                    component="img"
                                    alt="report icon"
                                    height="120"
                                    width='60'
                                    image="src\assets\report-image.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Sample Taken
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        fill vitals
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardActions>
                                <Button  onClick={() => handleClickOpen('sampleTaken')}>
                                    Open
                                </Button>
                                <Dialog
                                    open={openDialog === 'sampleTaken'}
                                    slots={{
                                        transition: Transition,
                                    }}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogTitle>{"Sample Taken Form"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                            <PatientVitalsForm/>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} >reset</Button>
                                        <Button onClick={handleClose} variant='outlined'>Submit</Button>
                                    </DialogActions>
                                </Dialog>
                            </CardActions>
                        </Card>

                        {/* ABCD */}
                        <Card sx={{ maxWidth: 265, maxHeight: 245 }}  className='bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow'>
                            <div className='flex '>
                                <CardMedia
                                    component="img"
                                    alt="report icon"
                                    height="120"
                                    width='60'
                                    image="src\assets\report-image.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        ABCD
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        fill vitals
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardActions>
                                <Button  onClick={() => handleClickOpen('abcd')}>
                                    Open
                                </Button>
                                <Dialog
                                    open={openDialog === 'abcd'}
                                    slots={{
                                        transition: Transition,
                                    }}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogTitle>{"ABCD Form"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                            <ABCDform />
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} >reset</Button>
                                        <Button onClick={handleClose} variant='outlined'>Submit</Button>
                                    </DialogActions>
                                </Dialog>
                            </CardActions>
                        </Card>

                        {/* Examination Findings */}
                        <Card sx={{ maxWidth: 265, maxHeight: 245 }}  className='bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow'>
                            <div className='flex '>
                                <CardMedia
                                    component="img"
                                    alt="report icon"
                                    height="120"
                                    width='60'
                                    image="src\assets\report-image.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Examination Findings
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        fill findings
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardActions>
                                <Button  onClick={() => handleClickOpen('emergencyFindings')}>
                                    Open
                                </Button>
                                <Dialog
                                    open={openDialog === 'emergencyFindings'}
                                    slots={{
                                        transition: Transition,
                                    }}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogTitle>{"Examination Findings Form"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                            <PatientVitalsForm/>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} >reset</Button>
                                        <Button onClick={handleClose} variant='outlined'>Submit</Button>
                                    </DialogActions>
                                </Dialog>
                            </CardActions>
                        </Card>

                        {/* Emergency Treatment */}
                        <Card sx={{ maxWidth: 265, maxHeight: 245 }}  className='bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow'>
                            <div className='flex '>
                                <CardMedia
                                    component="img"
                                    alt="report icon"
                                    height="120"
                                    width='60'
                                    image="src\assets\report-image.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Emergency Treatment
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        fill Emergency Treatment
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardActions>
                                <Button  onClick={() => handleClickOpen('emergencyTreatment')}>
                                    Open
                                </Button>
                                <Dialog
                                    open={openDialog === 'emergencyTreatment'}
                                    slots={{
                                        transition: Transition,
                                    }}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogTitle>{"Emergency Treatment Form"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                            <PatientVitalsForm/>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} >reset</Button>
                                        <Button onClick={handleClose} variant='outlined'>Submit</Button>
                                    </DialogActions>
                                </Dialog>
                            </CardActions>
                        </Card>
                </div>

                <div>

                </div>

                <div>
                    <h2 className="text-lg font-bold mb-2">Patient Complaints</h2>
                    <textarea
                        className="w-full border border-gray-300 rounded-lg p-2"
                        placeholder="Write the patient's complaint"
                        rows={4}
                    />
                </div>

                <div className="flex justify-end mt-4">
                    <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 py-2 rounded-xl shadow-lg hover:opacity-80 transition-opacity">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmergencyRoom;
