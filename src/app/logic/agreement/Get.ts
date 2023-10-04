

export const AgreementState = (deadline: Date): string => {
    const currentDate = new Date();
    currentDate.setUTCHours(0, 0, 0, 0);
    deadline.setUTCHours(0, 0, 0, 0);
    const MilisecsDiff = deadline.getTime() - currentDate.getTime();
    const daysDiff = Math.floor(MilisecsDiff / (1000 * 60 * 60 * 24));
    if (daysDiff <= 0) {
      return 'Vencido';
    } else if (daysDiff > 0 && daysDiff <= 3) {
      return 'Por vencer';
    } else {
      return 'Pendiente';
    }
  }