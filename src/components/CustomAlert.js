import React, { useEffect } from "react";
import { Alert, Space } from "antd";
import { useCustomContext } from "../context/Context";

const CustomAlert = () => {
  const { customAlertConfig, clearError } = useCustomContext();

  // Use useEffect to clear the error when the component mounts or when customAlertConfig changes
  useEffect(() => {
    clearError();
  }, [clearError, customAlertConfig]);

  return (
    <Space align="center">
      {customAlertConfig.displayCustomAlert && (
        <Alert
          message={customAlertConfig.customAlertMessage}
          type={customAlertConfig.customAlertType}
          description={customAlertConfig.customAlertDescription}
          showIcon
        />
      )}
    </Space>
  );
};

export default CustomAlert;
