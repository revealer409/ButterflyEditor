(window["webpackJsonpopentok_ux_components"] = window["webpackJsonpopentok_ux_components"] || []).push([[51],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/sql/sql.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/sql/sql.js ***!
  \**********************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '--',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.sql',\n    ignoreCase: true,\n    brackets: [\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    keywords: [\n        'ABORT_AFTER_WAIT',\n        'ABSENT',\n        'ABSOLUTE',\n        'ACCENT_SENSITIVITY',\n        'ACTION',\n        'ACTIVATION',\n        'ACTIVE',\n        'ADD',\n        'ADDRESS',\n        'ADMIN',\n        'AES',\n        'AES_128',\n        'AES_192',\n        'AES_256',\n        'AFFINITY',\n        'AFTER',\n        'AGGREGATE',\n        'ALGORITHM',\n        'ALL_CONSTRAINTS',\n        'ALL_ERRORMSGS',\n        'ALL_INDEXES',\n        'ALL_LEVELS',\n        'ALL_SPARSE_COLUMNS',\n        'ALLOW_CONNECTIONS',\n        'ALLOW_MULTIPLE_EVENT_LOSS',\n        'ALLOW_PAGE_LOCKS',\n        'ALLOW_ROW_LOCKS',\n        'ALLOW_SINGLE_EVENT_LOSS',\n        'ALLOW_SNAPSHOT_ISOLATION',\n        'ALLOWED',\n        'ALTER',\n        'ANONYMOUS',\n        'ANSI_DEFAULTS',\n        'ANSI_NULL_DEFAULT',\n        'ANSI_NULL_DFLT_OFF',\n        'ANSI_NULL_DFLT_ON',\n        'ANSI_NULLS',\n        'ANSI_PADDING',\n        'ANSI_WARNINGS',\n        'APPEND',\n        'APPLICATION',\n        'APPLICATION_LOG',\n        'ARITHABORT',\n        'ARITHIGNORE',\n        'AS',\n        'ASC',\n        'ASSEMBLY',\n        'ASYMMETRIC',\n        'ASYNCHRONOUS_COMMIT',\n        'AT',\n        'ATOMIC',\n        'ATTACH',\n        'ATTACH_REBUILD_LOG',\n        'AUDIT',\n        'AUDIT_GUID',\n        'AUTHENTICATION',\n        'AUTHORIZATION',\n        'AUTO',\n        'AUTO_CLEANUP',\n        'AUTO_CLOSE',\n        'AUTO_CREATE_STATISTICS',\n        'AUTO_SHRINK',\n        'AUTO_UPDATE_STATISTICS',\n        'AUTO_UPDATE_STATISTICS_ASYNC',\n        'AUTOMATED_BACKUP_PREFERENCE',\n        'AUTOMATIC',\n        'AVAILABILITY',\n        'AVAILABILITY_MODE',\n        'BACKUP',\n        'BACKUP_PRIORITY',\n        'BASE64',\n        'BATCHSIZE',\n        'BEGIN',\n        'BEGIN_DIALOG',\n        'BIGINT',\n        'BINARY',\n        'BINDING',\n        'BIT',\n        'BLOCKERS',\n        'BLOCKSIZE',\n        'BOUNDING_BOX',\n        'BREAK',\n        'BROKER',\n        'BROKER_INSTANCE',\n        'BROWSE',\n        'BUCKET_COUNT',\n        'BUFFER',\n        'BUFFERCOUNT',\n        'BULK',\n        'BULK_LOGGED',\n        'BY',\n        'CACHE',\n        'CALL',\n        'CALLED',\n        'CALLER',\n        'CAP_CPU_PERCENT',\n        'CASCADE',\n        'CASE',\n        'CATALOG',\n        'CATCH',\n        'CELLS_PER_OBJECT',\n        'CERTIFICATE',\n        'CHANGE_RETENTION',\n        'CHANGE_TRACKING',\n        'CHANGES',\n        'CHAR',\n        'CHARACTER',\n        'CHECK',\n        'CHECK_CONSTRAINTS',\n        'CHECK_EXPIRATION',\n        'CHECK_POLICY',\n        'CHECKALLOC',\n        'CHECKCATALOG',\n        'CHECKCONSTRAINTS',\n        'CHECKDB',\n        'CHECKFILEGROUP',\n        'CHECKIDENT',\n        'CHECKPOINT',\n        'CHECKTABLE',\n        'CLASSIFIER_FUNCTION',\n        'CLEANTABLE',\n        'CLEANUP',\n        'CLEAR',\n        'CLOSE',\n        'CLUSTER',\n        'CLUSTERED',\n        'CODEPAGE',\n        'COLLATE',\n        'COLLECTION',\n        'COLUMN',\n        'COLUMN_SET',\n        'COLUMNS',\n        'COLUMNSTORE',\n        'COLUMNSTORE_ARCHIVE',\n        'COMMIT',\n        'COMMITTED',\n        'COMPATIBILITY_LEVEL',\n        'COMPRESSION',\n        'COMPUTE',\n        'CONCAT',\n        'CONCAT_NULL_YIELDS_NULL',\n        'CONFIGURATION',\n        'CONNECT',\n        'CONSTRAINT',\n        'CONTAINMENT',\n        'CONTENT',\n        'CONTEXT',\n        'CONTINUE',\n        'CONTINUE_AFTER_ERROR',\n        'CONTRACT',\n        'CONTRACT_NAME',\n        'CONTROL',\n        'CONVERSATION',\n        'COOKIE',\n        'COPY_ONLY',\n        'COUNTER',\n        'CPU',\n        'CREATE',\n        'CREATE_NEW',\n        'CREATION_DISPOSITION',\n        'CREDENTIAL',\n        'CRYPTOGRAPHIC',\n        'CUBE',\n        'CURRENT',\n        'CURRENT_DATE',\n        'CURSOR',\n        'CURSOR_CLOSE_ON_COMMIT',\n        'CURSOR_DEFAULT',\n        'CYCLE',\n        'DATA',\n        'DATA_COMPRESSION',\n        'DATA_PURITY',\n        'DATABASE',\n        'DATABASE_DEFAULT',\n        'DATABASE_MIRRORING',\n        'DATABASE_SNAPSHOT',\n        'DATAFILETYPE',\n        'DATE',\n        'DATE_CORRELATION_OPTIMIZATION',\n        'DATEFIRST',\n        'DATEFORMAT',\n        'DATETIME',\n        'DATETIME2',\n        'DATETIMEOFFSET',\n        'DAY',\n        'DAYOFYEAR',\n        'DAYS',\n        'DB_CHAINING',\n        'DBCC',\n        'DBREINDEX',\n        'DDL_DATABASE_LEVEL_EVENTS',\n        'DEADLOCK_PRIORITY',\n        'DEALLOCATE',\n        'DEC',\n        'DECIMAL',\n        'DECLARE',\n        'DECRYPTION',\n        'DEFAULT',\n        'DEFAULT_DATABASE',\n        'DEFAULT_FULLTEXT_LANGUAGE',\n        'DEFAULT_LANGUAGE',\n        'DEFAULT_SCHEMA',\n        'DEFINITION',\n        'DELAY',\n        'DELAYED_DURABILITY',\n        'DELETE',\n        'DELETED',\n        'DENSITY_VECTOR',\n        'DENY',\n        'DEPENDENTS',\n        'DES',\n        'DESC',\n        'DESCRIPTION',\n        'DESX',\n        'DHCP',\n        'DIAGNOSTICS',\n        'DIALOG',\n        'DIFFERENTIAL',\n        'DIRECTORY_NAME',\n        'DISABLE',\n        'DISABLE_BROKER',\n        'DISABLED',\n        'DISK',\n        'DISTINCT',\n        'DISTRIBUTED',\n        'DOCUMENT',\n        'DOUBLE',\n        'DROP',\n        'DROP_EXISTING',\n        'DROPCLEANBUFFERS',\n        'DUMP',\n        'DURABILITY',\n        'DYNAMIC',\n        'EDITION',\n        'ELEMENTS',\n        'ELSE',\n        'EMERGENCY',\n        'EMPTY',\n        'EMPTYFILE',\n        'ENABLE',\n        'ENABLE_BROKER',\n        'ENABLED',\n        'ENCRYPTION',\n        'END',\n        'ENDPOINT',\n        'ENDPOINT_URL',\n        'ERRLVL',\n        'ERROR',\n        'ERROR_BROKER_CONVERSATIONS',\n        'ERRORFILE',\n        'ESCAPE',\n        'ESTIMATEONLY',\n        'EVENT',\n        'EVENT_RETENTION_MODE',\n        'EXEC',\n        'EXECUTABLE',\n        'EXECUTE',\n        'EXIT',\n        'EXPAND',\n        'EXPIREDATE',\n        'EXPIRY_DATE',\n        'EXPLICIT',\n        'EXTENDED_LOGICAL_CHECKS',\n        'EXTENSION',\n        'EXTERNAL',\n        'EXTERNAL_ACCESS',\n        'FAIL_OPERATION',\n        'FAILOVER',\n        'FAILOVER_MODE',\n        'FAILURE_CONDITION_LEVEL',\n        'FALSE',\n        'FAN_IN',\n        'FAST',\n        'FAST_FORWARD',\n        'FETCH',\n        'FIELDTERMINATOR',\n        'FILE',\n        'FILEGROUP',\n        'FILEGROWTH',\n        'FILELISTONLY',\n        'FILENAME',\n        'FILEPATH',\n        'FILESTREAM',\n        'FILESTREAM_ON',\n        'FILETABLE_COLLATE_FILENAME',\n        'FILETABLE_DIRECTORY',\n        'FILETABLE_FULLPATH_UNIQUE_CONSTRAINT_NAME',\n        'FILETABLE_NAMESPACE',\n        'FILETABLE_PRIMARY_KEY_CONSTRAINT_NAME',\n        'FILETABLE_STREAMID_UNIQUE_CONSTRAINT_NAME',\n        'FILLFACTOR',\n        'FILTERING',\n        'FIRE_TRIGGERS',\n        'FIRST',\n        'FIRSTROW',\n        'FLOAT',\n        'FMTONLY',\n        'FOLLOWING',\n        'FOR',\n        'FORCE',\n        'FORCE_FAILOVER_ALLOW_DATA_LOSS',\n        'FORCE_SERVICE_ALLOW_DATA_LOSS',\n        'FORCED',\n        'FORCEPLAN',\n        'FORCESCAN',\n        'FORCESEEK',\n        'FOREIGN',\n        'FORMATFILE',\n        'FORMSOF',\n        'FORWARD_ONLY',\n        'FREE',\n        'FREEPROCCACHE',\n        'FREESESSIONCACHE',\n        'FREESYSTEMCACHE',\n        'FROM',\n        'FULL',\n        'FULLSCAN',\n        'FULLTEXT',\n        'FUNCTION',\n        'GB',\n        'GEOGRAPHY_AUTO_GRID',\n        'GEOGRAPHY_GRID',\n        'GEOMETRY_AUTO_GRID',\n        'GEOMETRY_GRID',\n        'GET',\n        'GLOBAL',\n        'GO',\n        'GOTO',\n        'GOVERNOR',\n        'GRANT',\n        'GRIDS',\n        'GROUP',\n        'GROUP_MAX_REQUESTS',\n        'HADR',\n        'HASH',\n        'HASHED',\n        'HAVING',\n        'HEADERONLY',\n        'HEALTH_CHECK_TIMEOUT',\n        'HELP',\n        'HIERARCHYID',\n        'HIGH',\n        'HINT',\n        'HISTOGRAM',\n        'HOLDLOCK',\n        'HONOR_BROKER_PRIORITY',\n        'HOUR',\n        'HOURS',\n        'IDENTITY',\n        'IDENTITY_INSERT',\n        'IDENTITY_VALUE',\n        'IDENTITYCOL',\n        'IF',\n        'IGNORE_CONSTRAINTS',\n        'IGNORE_DUP_KEY',\n        'IGNORE_NONCLUSTERED_COLUMNSTORE_INDEX',\n        'IGNORE_TRIGGERS',\n        'IMAGE',\n        'IMMEDIATE',\n        'IMPERSONATE',\n        'IMPLICIT_TRANSACTIONS',\n        'IMPORTANCE',\n        'INCLUDE',\n        'INCREMENT',\n        'INCREMENTAL',\n        'INDEX',\n        'INDEXDEFRAG',\n        'INFINITE',\n        'INFLECTIONAL',\n        'INIT',\n        'INITIATOR',\n        'INPUT',\n        'INPUTBUFFER',\n        'INSENSITIVE',\n        'INSERT',\n        'INSERTED',\n        'INSTEAD',\n        'INT',\n        'INTEGER',\n        'INTO',\n        'IO',\n        'IP',\n        'ISABOUT',\n        'ISOLATION',\n        'JOB',\n        'KB',\n        'KEEP',\n        'KEEP_CDC',\n        'KEEP_NULLS',\n        'KEEP_REPLICATION',\n        'KEEPDEFAULTS',\n        'KEEPFIXED',\n        'KEEPIDENTITY',\n        'KEEPNULLS',\n        'KERBEROS',\n        'KEY',\n        'KEY_SOURCE',\n        'KEYS',\n        'KEYSET',\n        'KILL',\n        'KILOBYTES_PER_BATCH',\n        'LABELONLY',\n        'LANGUAGE',\n        'LAST',\n        'LASTROW',\n        'LEVEL',\n        'LEVEL_1',\n        'LEVEL_2',\n        'LEVEL_3',\n        'LEVEL_4',\n        'LIFETIME',\n        'LIMIT',\n        'LINENO',\n        'LIST',\n        'LISTENER',\n        'LISTENER_IP',\n        'LISTENER_PORT',\n        'LOAD',\n        'LOADHISTORY',\n        'LOB_COMPACTION',\n        'LOCAL',\n        'LOCAL_SERVICE_NAME',\n        'LOCK_ESCALATION',\n        'LOCK_TIMEOUT',\n        'LOGIN',\n        'LOGSPACE',\n        'LOOP',\n        'LOW',\n        'MANUAL',\n        'MARK',\n        'MARK_IN_USE_FOR_REMOVAL',\n        'MASTER',\n        'MAX_CPU_PERCENT',\n        'MAX_DISPATCH_LATENCY',\n        'MAX_DOP',\n        'MAX_DURATION',\n        'MAX_EVENT_SIZE',\n        'MAX_FILES',\n        'MAX_IOPS_PER_VOLUME',\n        'MAX_MEMORY',\n        'MAX_MEMORY_PERCENT',\n        'MAX_QUEUE_READERS',\n        'MAX_ROLLOVER_FILES',\n        'MAX_SIZE',\n        'MAXDOP',\n        'MAXERRORS',\n        'MAXLENGTH',\n        'MAXRECURSION',\n        'MAXSIZE',\n        'MAXTRANSFERSIZE',\n        'MAXVALUE',\n        'MB',\n        'MEDIADESCRIPTION',\n        'MEDIANAME',\n        'MEDIAPASSWORD',\n        'MEDIUM',\n        'MEMBER',\n        'MEMORY_OPTIMIZED',\n        'MEMORY_OPTIMIZED_DATA',\n        'MEMORY_OPTIMIZED_ELEVATE_TO_SNAPSHOT',\n        'MEMORY_PARTITION_MODE',\n        'MERGE',\n        'MESSAGE',\n        'MESSAGE_FORWARD_SIZE',\n        'MESSAGE_FORWARDING',\n        'MICROSECOND',\n        'MILLISECOND',\n        'MIN_CPU_PERCENT',\n        'MIN_IOPS_PER_VOLUME',\n        'MIN_MEMORY_PERCENT',\n        'MINUTE',\n        'MINUTES',\n        'MINVALUE',\n        'MIRROR',\n        'MIRROR_ADDRESS',\n        'MODIFY',\n        'MONEY',\n        'MONTH',\n        'MOVE',\n        'MULTI_USER',\n        'MUST_CHANGE',\n        'NAME',\n        'NANOSECOND',\n        'NATIONAL',\n        'NATIVE_COMPILATION',\n        'NCHAR',\n        'NEGOTIATE',\n        'NESTED_TRIGGERS',\n        'NEW_ACCOUNT',\n        'NEW_BROKER',\n        'NEW_PASSWORD',\n        'NEWNAME',\n        'NEXT',\n        'NO',\n        'NO_BROWSETABLE',\n        'NO_CHECKSUM',\n        'NO_COMPRESSION',\n        'NO_EVENT_LOSS',\n        'NO_INFOMSGS',\n        'NO_TRUNCATE',\n        'NO_WAIT',\n        'NOCHECK',\n        'NOCOUNT',\n        'NOEXEC',\n        'NOEXPAND',\n        'NOFORMAT',\n        'NOINDEX',\n        'NOINIT',\n        'NOLOCK',\n        'NON',\n        'NON_TRANSACTED_ACCESS',\n        'NONCLUSTERED',\n        'NONE',\n        'NORECOMPUTE',\n        'NORECOVERY',\n        'NORESEED',\n        'NORESET',\n        'NOREWIND',\n        'NORMAL',\n        'NOSKIP',\n        'NOTIFICATION',\n        'NOTRUNCATE',\n        'NOUNLOAD',\n        'NOWAIT',\n        'NTEXT',\n        'NTLM',\n        'NUMANODE',\n        'NUMERIC',\n        'NUMERIC_ROUNDABORT',\n        'NVARCHAR',\n        'OBJECT',\n        'OF',\n        'OFF',\n        'OFFLINE',\n        'OFFSET',\n        'OFFSETS',\n        'OLD_ACCOUNT',\n        'OLD_PASSWORD',\n        'ON',\n        'ON_FAILURE',\n        'ONLINE',\n        'ONLY',\n        'OPEN',\n        'OPEN_EXISTING',\n        'OPENTRAN',\n        'OPTIMISTIC',\n        'OPTIMIZE',\n        'OPTION',\n        'ORDER',\n        'OUT',\n        'OUTPUT',\n        'OUTPUTBUFFER',\n        'OVER',\n        'OVERRIDE',\n        'OWNER',\n        'OWNERSHIP',\n        'PAD_INDEX',\n        'PAGE',\n        'PAGE_VERIFY',\n        'PAGECOUNT',\n        'PAGLOCK',\n        'PARAMETERIZATION',\n        'PARSEONLY',\n        'PARTIAL',\n        'PARTITION',\n        'PARTITIONS',\n        'PARTNER',\n        'PASSWORD',\n        'PATH',\n        'PER_CPU',\n        'PER_NODE',\n        'PERCENT',\n        'PERMISSION_SET',\n        'PERSISTED',\n        'PHYSICAL_ONLY',\n        'PLAN',\n        'POISON_MESSAGE_HANDLING',\n        'POOL',\n        'POPULATION',\n        'PORT',\n        'PRECEDING',\n        'PRECISION',\n        'PRIMARY',\n        'PRIMARY_ROLE',\n        'PRINT',\n        'PRIOR',\n        'PRIORITY',\n        'PRIORITY_LEVEL',\n        'PRIVATE',\n        'PRIVILEGES',\n        'PROC',\n        'PROCCACHE',\n        'PROCEDURE',\n        'PROCEDURE_NAME',\n        'PROCESS',\n        'PROFILE',\n        'PROPERTY',\n        'PROPERTY_DESCRIPTION',\n        'PROPERTY_INT_ID',\n        'PROPERTY_SET_GUID',\n        'PROVIDER',\n        'PROVIDER_KEY_NAME',\n        'PUBLIC',\n        'PUT',\n        'QUARTER',\n        'QUERY',\n        'QUERY_GOVERNOR_COST_LIMIT',\n        'QUEUE',\n        'QUEUE_DELAY',\n        'QUOTED_IDENTIFIER',\n        'RAISERROR',\n        'RANGE',\n        'RAW',\n        'RC2',\n        'RC4',\n        'RC4_128',\n        'READ',\n        'READ_COMMITTED_SNAPSHOT',\n        'READ_ONLY',\n        'READ_ONLY_ROUTING_LIST',\n        'READ_ONLY_ROUTING_URL',\n        'READ_WRITE',\n        'READ_WRITE_FILEGROUPS',\n        'READCOMMITTED',\n        'READCOMMITTEDLOCK',\n        'READONLY',\n        'READPAST',\n        'READTEXT',\n        'READUNCOMMITTED',\n        'READWRITE',\n        'REAL',\n        'REBUILD',\n        'RECEIVE',\n        'RECOMPILE',\n        'RECONFIGURE',\n        'RECOVERY',\n        'RECURSIVE',\n        'RECURSIVE_TRIGGERS',\n        'REFERENCES',\n        'REGENERATE',\n        'RELATED_CONVERSATION',\n        'RELATED_CONVERSATION_GROUP',\n        'RELATIVE',\n        'REMOTE',\n        'REMOTE_PROC_TRANSACTIONS',\n        'REMOTE_SERVICE_NAME',\n        'REMOVE',\n        'REORGANIZE',\n        'REPAIR_ALLOW_DATA_LOSS',\n        'REPAIR_FAST',\n        'REPAIR_REBUILD',\n        'REPEATABLE',\n        'REPEATABLEREAD',\n        'REPLICA',\n        'REPLICATION',\n        'REQUEST_MAX_CPU_TIME_SEC',\n        'REQUEST_MAX_MEMORY_GRANT_PERCENT',\n        'REQUEST_MEMORY_GRANT_TIMEOUT_SEC',\n        'REQUIRED',\n        'RESAMPLE',\n        'RESEED',\n        'RESERVE_DISK_SPACE',\n        'RESET',\n        'RESOURCE',\n        'RESTART',\n        'RESTORE',\n        'RESTRICT',\n        'RESTRICTED_USER',\n        'RESULT',\n        'RESUME',\n        'RETAINDAYS',\n        'RETENTION',\n        'RETURN',\n        'RETURNS',\n        'REVERT',\n        'REVOKE',\n        'REWIND',\n        'REWINDONLY',\n        'ROBUST',\n        'ROLE',\n        'ROLLBACK',\n        'ROLLUP',\n        'ROOT',\n        'ROUTE',\n        'ROW',\n        'ROWCOUNT',\n        'ROWGUIDCOL',\n        'ROWLOCK',\n        'ROWS',\n        'ROWS_PER_BATCH',\n        'ROWTERMINATOR',\n        'ROWVERSION',\n        'RSA_1024',\n        'RSA_2048',\n        'RSA_512',\n        'RULE',\n        'SAFE',\n        'SAFETY',\n        'SAMPLE',\n        'SAVE',\n        'SCHEDULER',\n        'SCHEMA',\n        'SCHEMA_AND_DATA',\n        'SCHEMA_ONLY',\n        'SCHEMABINDING',\n        'SCHEME',\n        'SCROLL',\n        'SCROLL_LOCKS',\n        'SEARCH',\n        'SECOND',\n        'SECONDARY',\n        'SECONDARY_ONLY',\n        'SECONDARY_ROLE',\n        'SECONDS',\n        'SECRET',\n        'SECURITY_LOG',\n        'SECURITYAUDIT',\n        'SELECT',\n        'SELECTIVE',\n        'SELF',\n        'SEND',\n        'SENT',\n        'SEQUENCE',\n        'SERIALIZABLE',\n        'SERVER',\n        'SERVICE',\n        'SERVICE_BROKER',\n        'SERVICE_NAME',\n        'SESSION',\n        'SESSION_TIMEOUT',\n        'SET',\n        'SETS',\n        'SETUSER',\n        'SHOW_STATISTICS',\n        'SHOWCONTIG',\n        'SHOWPLAN',\n        'SHOWPLAN_ALL',\n        'SHOWPLAN_TEXT',\n        'SHOWPLAN_XML',\n        'SHRINKDATABASE',\n        'SHRINKFILE',\n        'SHUTDOWN',\n        'SID',\n        'SIGNATURE',\n        'SIMPLE',\n        'SINGLE_BLOB',\n        'SINGLE_CLOB',\n        'SINGLE_NCLOB',\n        'SINGLE_USER',\n        'SINGLETON',\n        'SIZE',\n        'SKIP',\n        'SMALLDATETIME',\n        'SMALLINT',\n        'SMALLMONEY',\n        'SNAPSHOT',\n        'SORT_IN_TEMPDB',\n        'SOURCE',\n        'SPARSE',\n        'SPATIAL',\n        'SPATIAL_WINDOW_MAX_CELLS',\n        'SPECIFICATION',\n        'SPLIT',\n        'SQL',\n        'SQL_VARIANT',\n        'SQLPERF',\n        'STANDBY',\n        'START',\n        'START_DATE',\n        'STARTED',\n        'STARTUP_STATE',\n        'STAT_HEADER',\n        'STATE',\n        'STATEMENT',\n        'STATIC',\n        'STATISTICAL_SEMANTICS',\n        'STATISTICS',\n        'STATISTICS_INCREMENTAL',\n        'STATISTICS_NORECOMPUTE',\n        'STATS',\n        'STATS_STREAM',\n        'STATUS',\n        'STATUSONLY',\n        'STOP',\n        'STOP_ON_ERROR',\n        'STOPAT',\n        'STOPATMARK',\n        'STOPBEFOREMARK',\n        'STOPLIST',\n        'STOPPED',\n        'SUBJECT',\n        'SUBSCRIPTION',\n        'SUPPORTED',\n        'SUSPEND',\n        'SWITCH',\n        'SYMMETRIC',\n        'SYNCHRONOUS_COMMIT',\n        'SYNONYM',\n        'SYSNAME',\n        'SYSTEM',\n        'TABLE',\n        'TABLERESULTS',\n        'TABLESAMPLE',\n        'TABLOCK',\n        'TABLOCKX',\n        'TAKE',\n        'TAPE',\n        'TARGET',\n        'TARGET_RECOVERY_TIME',\n        'TB',\n        'TCP',\n        'TEXT',\n        'TEXTIMAGE_ON',\n        'TEXTSIZE',\n        'THEN',\n        'THESAURUS',\n        'THROW',\n        'TIES',\n        'TIME',\n        'TIMEOUT',\n        'TIMER',\n        'TIMESTAMP',\n        'TINYINT',\n        'TO',\n        'TOP',\n        'TORN_PAGE_DETECTION',\n        'TRACEOFF',\n        'TRACEON',\n        'TRACESTATUS',\n        'TRACK_CAUSALITY',\n        'TRACK_COLUMNS_UPDATED',\n        'TRAN',\n        'TRANSACTION',\n        'TRANSFER',\n        'TRANSFORM_NOISE_WORDS',\n        'TRIGGER',\n        'TRIPLE_DES',\n        'TRIPLE_DES_3KEY',\n        'TRUE',\n        'TRUNCATE',\n        'TRUNCATEONLY',\n        'TRUSTWORTHY',\n        'TRY',\n        'TSQL',\n        'TWO_DIGIT_YEAR_CUTOFF',\n        'TYPE',\n        'TYPE_WARNING',\n        'UNBOUNDED',\n        'UNCHECKED',\n        'UNCOMMITTED',\n        'UNDEFINED',\n        'UNIQUE',\n        'UNIQUEIDENTIFIER',\n        'UNKNOWN',\n        'UNLIMITED',\n        'UNLOAD',\n        'UNSAFE',\n        'UPDATE',\n        'UPDATETEXT',\n        'UPDATEUSAGE',\n        'UPDLOCK',\n        'URL',\n        'USE',\n        'USED',\n        'USER',\n        'USEROPTIONS',\n        'USING',\n        'VALID_XML',\n        'VALIDATION',\n        'VALUE',\n        'VALUES',\n        'VARBINARY',\n        'VARCHAR',\n        'VARYING',\n        'VERIFYONLY',\n        'VERSION',\n        'VIEW',\n        'VIEW_METADATA',\n        'VIEWS',\n        'VISIBILITY',\n        'WAIT_AT_LOW_PRIORITY',\n        'WAITFOR',\n        'WEEK',\n        'WEIGHT',\n        'WELL_FORMED_XML',\n        'WHEN',\n        'WHERE',\n        'WHILE',\n        'WINDOWS',\n        'WITH',\n        'WITHIN',\n        'WITHOUT',\n        'WITNESS',\n        'WORK',\n        'WORKLOAD',\n        'WRITETEXT',\n        'XACT_ABORT',\n        'XLOCK',\n        'XMAX',\n        'XMIN',\n        'XML',\n        'XMLDATA',\n        'XMLNAMESPACES',\n        'XMLSCHEMA',\n        'XQUERY',\n        'XSINIL',\n        'YEAR',\n        'YMAX',\n        'YMIN'\n    ],\n    operators: [\n        // Logical\n        'ALL', 'AND', 'ANY', 'BETWEEN', 'EXISTS', 'IN', 'LIKE', 'NOT', 'OR', 'SOME',\n        // Set\n        'EXCEPT', 'INTERSECT', 'UNION',\n        // Join\n        'APPLY', 'CROSS', 'FULL', 'INNER', 'JOIN', 'LEFT', 'OUTER', 'RIGHT',\n        // Predicates\n        'CONTAINS', 'FREETEXT', 'IS', 'NULL',\n        // Pivoting\n        'PIVOT', 'UNPIVOT',\n        // Merging\n        'MATCHED'\n    ],\n    builtinFunctions: [\n        // Aggregate\n        'AVG', 'CHECKSUM_AGG', 'COUNT', 'COUNT_BIG', 'GROUPING', 'GROUPING_ID', 'MAX', 'MIN', 'SUM', 'STDEV', 'STDEVP', 'VAR', 'VARP',\n        // Analytic\n        'CUME_DIST', 'FIRST_VALUE', 'LAG', 'LAST_VALUE', 'LEAD', 'PERCENTILE_CONT', 'PERCENTILE_DISC', 'PERCENT_RANK',\n        // Collation\n        'COLLATE', 'COLLATIONPROPERTY', 'TERTIARY_WEIGHTS',\n        // Azure\n        'FEDERATION_FILTERING_VALUE',\n        // Conversion\n        'CAST', 'CONVERT', 'PARSE', 'TRY_CAST', 'TRY_CONVERT', 'TRY_PARSE',\n        // Cryptographic\n        'ASYMKEY_ID', 'ASYMKEYPROPERTY', 'CERTPROPERTY', 'CERT_ID', 'CRYPT_GEN_RANDOM',\n        'DECRYPTBYASYMKEY', 'DECRYPTBYCERT', 'DECRYPTBYKEY', 'DECRYPTBYKEYAUTOASYMKEY', 'DECRYPTBYKEYAUTOCERT', 'DECRYPTBYPASSPHRASE',\n        'ENCRYPTBYASYMKEY', 'ENCRYPTBYCERT', 'ENCRYPTBYKEY', 'ENCRYPTBYPASSPHRASE', 'HASHBYTES', 'IS_OBJECTSIGNED',\n        'KEY_GUID', 'KEY_ID', 'KEY_NAME', 'SIGNBYASYMKEY', 'SIGNBYCERT', 'SYMKEYPROPERTY', 'VERIFYSIGNEDBYCERT', 'VERIFYSIGNEDBYASYMKEY',\n        // Cursor\n        'CURSOR_STATUS',\n        // Datatype\n        'DATALENGTH', 'IDENT_CURRENT', 'IDENT_INCR', 'IDENT_SEED', 'IDENTITY', 'SQL_VARIANT_PROPERTY',\n        // Datetime\n        'CURRENT_TIMESTAMP', 'DATEADD', 'DATEDIFF', 'DATEFROMPARTS', 'DATENAME', 'DATEPART', 'DATETIME2FROMPARTS', 'DATETIMEFROMPARTS',\n        'DATETIMEOFFSETFROMPARTS', 'DAY', 'EOMONTH', 'GETDATE', 'GETUTCDATE', 'ISDATE', 'MONTH', 'SMALLDATETIMEFROMPARTS', 'SWITCHOFFSET',\n        'SYSDATETIME', 'SYSDATETIMEOFFSET', 'SYSUTCDATETIME', 'TIMEFROMPARTS', 'TODATETIMEOFFSET', 'YEAR',\n        // Logical\n        'CHOOSE', 'COALESCE', 'IIF', 'NULLIF',\n        // Mathematical\n        'ABS', 'ACOS', 'ASIN', 'ATAN', 'ATN2', 'CEILING', 'COS', 'COT', 'DEGREES', 'EXP', 'FLOOR', 'LOG', 'LOG10',\n        'PI', 'POWER', 'RADIANS', 'RAND', 'ROUND', 'SIGN', 'SIN', 'SQRT', 'SQUARE', 'TAN',\n        // Metadata\n        'APP_NAME', 'APPLOCK_MODE', 'APPLOCK_TEST', 'ASSEMBLYPROPERTY', 'COL_LENGTH', 'COL_NAME', 'COLUMNPROPERTY',\n        'DATABASE_PRINCIPAL_ID', 'DATABASEPROPERTYEX', 'DB_ID', 'DB_NAME', 'FILE_ID', 'FILE_IDEX', 'FILE_NAME', 'FILEGROUP_ID',\n        'FILEGROUP_NAME', 'FILEGROUPPROPERTY', 'FILEPROPERTY', 'FULLTEXTCATALOGPROPERTY', 'FULLTEXTSERVICEPROPERTY',\n        'INDEX_COL', 'INDEXKEY_PROPERTY', 'INDEXPROPERTY', 'OBJECT_DEFINITION', 'OBJECT_ID',\n        'OBJECT_NAME', 'OBJECT_SCHEMA_NAME', 'OBJECTPROPERTY', 'OBJECTPROPERTYEX', 'ORIGINAL_DB_NAME', 'PARSENAME',\n        'SCHEMA_ID', 'SCHEMA_NAME', 'SCOPE_IDENTITY', 'SERVERPROPERTY', 'STATS_DATE', 'TYPE_ID', 'TYPE_NAME', 'TYPEPROPERTY',\n        // Ranking\n        'DENSE_RANK', 'NTILE', 'RANK', 'ROW_NUMBER',\n        // Replication\n        'PUBLISHINGSERVERNAME',\n        // Rowset\n        'OPENDATASOURCE', 'OPENQUERY', 'OPENROWSET', 'OPENXML',\n        // Security\n        'CERTENCODED', 'CERTPRIVATEKEY', 'CURRENT_USER', 'HAS_DBACCESS', 'HAS_PERMS_BY_NAME', 'IS_MEMBER', 'IS_ROLEMEMBER', 'IS_SRVROLEMEMBER',\n        'LOGINPROPERTY', 'ORIGINAL_LOGIN', 'PERMISSIONS', 'PWDENCRYPT', 'PWDCOMPARE', 'SESSION_USER', 'SESSIONPROPERTY', 'SUSER_ID', 'SUSER_NAME',\n        'SUSER_SID', 'SUSER_SNAME', 'SYSTEM_USER', 'USER', 'USER_ID', 'USER_NAME',\n        // String\n        'ASCII', 'CHAR', 'CHARINDEX', 'CONCAT', 'DIFFERENCE', 'FORMAT', 'LEFT', 'LEN', 'LOWER', 'LTRIM', 'NCHAR', 'PATINDEX',\n        'QUOTENAME', 'REPLACE', 'REPLICATE', 'REVERSE', 'RIGHT', 'RTRIM', 'SOUNDEX', 'SPACE', 'STR', 'STUFF', 'SUBSTRING', 'UNICODE', 'UPPER',\n        // System\n        'BINARY_CHECKSUM', 'CHECKSUM', 'CONNECTIONPROPERTY', 'CONTEXT_INFO', 'CURRENT_REQUEST_ID', 'ERROR_LINE', 'ERROR_NUMBER', 'ERROR_MESSAGE',\n        'ERROR_PROCEDURE', 'ERROR_SEVERITY', 'ERROR_STATE', 'FORMATMESSAGE', 'GETANSINULL', 'GET_FILESTREAM_TRANSACTION_CONTEXT', 'HOST_ID',\n        'HOST_NAME', 'ISNULL', 'ISNUMERIC', 'MIN_ACTIVE_ROWVERSION', 'NEWID', 'NEWSEQUENTIALID', 'ROWCOUNT_BIG', 'XACT_STATE',\n        // TextImage\n        'TEXTPTR', 'TEXTVALID',\n        // Trigger\n        'COLUMNS_UPDATED', 'EVENTDATA', 'TRIGGER_NESTLEVEL', 'UPDATE',\n        // ChangeTracking\n        'CHANGETABLE', 'CHANGE_TRACKING_CONTEXT', 'CHANGE_TRACKING_CURRENT_VERSION', 'CHANGE_TRACKING_IS_COLUMN_IN_MASK', 'CHANGE_TRACKING_MIN_VALID_VERSION',\n        // FullTextSearch\n        'CONTAINSTABLE', 'FREETEXTTABLE',\n        // SemanticTextSearch\n        'SEMANTICKEYPHRASETABLE', 'SEMANTICSIMILARITYDETAILSTABLE', 'SEMANTICSIMILARITYTABLE',\n        // FileStream\n        'FILETABLEROOTPATH', 'GETFILENAMESPACEPATH', 'GETPATHLOCATOR', 'PATHNAME',\n        // ServiceBroker\n        'GET_TRANSMISSION_STATUS'\n    ],\n    builtinVariables: [\n        // Configuration\n        '@@DATEFIRST', '@@DBTS', '@@LANGID', '@@LANGUAGE', '@@LOCK_TIMEOUT', '@@MAX_CONNECTIONS', '@@MAX_PRECISION', '@@NESTLEVEL',\n        '@@OPTIONS', '@@REMSERVER', '@@SERVERNAME', '@@SERVICENAME', '@@SPID', '@@TEXTSIZE', '@@VERSION',\n        // Cursor\n        '@@CURSOR_ROWS', '@@FETCH_STATUS',\n        // Datetime\n        '@@DATEFIRST',\n        // Metadata\n        '@@PROCID',\n        // System\n        '@@ERROR', '@@IDENTITY', '@@ROWCOUNT', '@@TRANCOUNT',\n        // Stats\n        '@@CONNECTIONS', '@@CPU_BUSY', '@@IDLE', '@@IO_BUSY', '@@PACKET_ERRORS', '@@PACK_RECEIVED', '@@PACK_SENT',\n        '@@TIMETICKS', '@@TOTAL_ERRORS', '@@TOTAL_READ', '@@TOTAL_WRITE'\n    ],\n    pseudoColumns: [\n        '$ACTION', '$IDENTITY', '$ROWGUID', '$PARTITION'\n    ],\n    tokenizer: {\n        root: [\n            { include: '@comments' },\n            { include: '@whitespace' },\n            { include: '@pseudoColumns' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            { include: '@complexIdentifiers' },\n            { include: '@scopes' },\n            [/[;,.]/, 'delimiter'],\n            [/[()]/, '@brackets'],\n            [/[\\w@#$]+/, {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@operators': 'operator',\n                        '@builtinVariables': 'predefined',\n                        '@builtinFunctions': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n            [/[<>=!%&+\\-*/|~^]/, 'operator'],\n        ],\n        whitespace: [\n            [/\\s+/, 'white']\n        ],\n        comments: [\n            [/--+.*/, 'comment'],\n            [/\\/\\*/, { token: 'comment.quote', next: '@comment' }]\n        ],\n        comment: [\n            [/[^*/]+/, 'comment'],\n            // Not supporting nested comments, as nested comments seem to not be standard?\n            // i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic\n            // [/\\/\\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(\n            [/\\*\\//, { token: 'comment.quote', next: '@pop' }],\n            [/./, 'comment']\n        ],\n        pseudoColumns: [\n            [/[$][A-Za-z_][\\w@#$]*/, {\n                    cases: {\n                        '@pseudoColumns': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n        ],\n        numbers: [\n            [/0[xX][0-9a-fA-F]*/, 'number'],\n            [/[$][+-]*\\d*(\\.\\d*)?/, 'number'],\n            [/((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][\\-+]?\\d+)?/, 'number']\n        ],\n        strings: [\n            [/N'/, { token: 'string', next: '@string' }],\n            [/'/, { token: 'string', next: '@string' }]\n        ],\n        string: [\n            [/[^']+/, 'string'],\n            [/''/, 'string'],\n            [/'/, { token: 'string', next: '@pop' }]\n        ],\n        complexIdentifiers: [\n            [/\\[/, { token: 'identifier.quote', next: '@bracketedIdentifier' }],\n            [/\"/, { token: 'identifier.quote', next: '@quotedIdentifier' }]\n        ],\n        bracketedIdentifier: [\n            [/[^\\]]+/, 'identifier'],\n            [/]]/, 'identifier'],\n            [/]/, { token: 'identifier.quote', next: '@pop' }]\n        ],\n        quotedIdentifier: [\n            [/[^\"]+/, 'identifier'],\n            [/\"\"/, 'identifier'],\n            [/\"/, { token: 'identifier.quote', next: '@pop' }]\n        ],\n        scopes: [\n            [/BEGIN\\s+(DISTRIBUTED\\s+)?TRAN(SACTION)?\\b/i, 'keyword'],\n            [/BEGIN\\s+TRY\\b/i, { token: 'keyword.try' }],\n            [/END\\s+TRY\\b/i, { token: 'keyword.try' }],\n            [/BEGIN\\s+CATCH\\b/i, { token: 'keyword.catch' }],\n            [/END\\s+CATCH\\b/i, { token: 'keyword.catch' }],\n            [/(BEGIN|CASE)\\b/i, { token: 'keyword.block' }],\n            [/END\\b/i, { token: 'keyword.block' }],\n            [/WHEN\\b/i, { token: 'keyword.choice' }],\n            [/THEN\\b/i, { token: 'keyword.choice' }]\n        ]\n    }\n};\n\n\n//# sourceURL=webpack://opentok-ux-components/./node_modules/monaco-editor/esm/vs/basic-languages/sql/sql.js?");

/***/ })

}]);