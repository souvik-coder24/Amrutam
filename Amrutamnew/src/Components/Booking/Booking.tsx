import styles from './Booking.module.css';

const Booking = () => {
  return (
    <div className={styles.booking}>
      <div className={styles.content}>
        <p className={styles.bookingHeader}>Ready to restore harmony in your mind, body and spirit?</p>
        <button className={styles.bookingBtn}>
            <p>Book a consultation</p>
        </button>
      </div>
    </div>
  );
};

export default Booking;
