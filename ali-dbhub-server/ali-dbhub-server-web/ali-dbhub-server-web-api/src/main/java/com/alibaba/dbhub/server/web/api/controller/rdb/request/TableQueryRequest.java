/**
 * alibaba.com Inc.
 * Copyright (c) 2004-2023 All Rights Reserved.
 */
package com.alibaba.dbhub.server.web.api.controller.rdb.request;

import java.io.Serial;
import java.util.List;

import javax.validation.constraints.NotNull;

import com.alibaba.dbhub.server.tools.base.wrapper.request.PageQueryRequest;
import com.alibaba.dbhub.server.web.api.controller.data.source.request.DataSourceBaseRequestInfo;

import lombok.Data;

/**
 * @author jipengfei
 * @version : TableColumnQueryRequest.java
 */
@Data
public class TableQueryRequest extends PageQueryRequest implements DataSourceBaseRequestInfo {

    @Serial
    private static final long serialVersionUID = 5794716286491282784L;

    /**
     * 数据源id
     */
    @NotNull
    private Long dataSourceId;

    /**
     * DB名称
     */
    @NotNull
    private String databaseName;

    /**
     * 表名
     */
    private String tableName;
}