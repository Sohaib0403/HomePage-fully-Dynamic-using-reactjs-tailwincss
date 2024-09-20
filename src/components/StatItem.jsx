const StatItem = ({ value, description, valueClass, descriptionClass }) => {
    return (
      <div>
      <div className={valueClass}>{value}</div>
      <div className={descriptionClass}>{description}</div>
    </div>
    );
};

export default StatItem;
